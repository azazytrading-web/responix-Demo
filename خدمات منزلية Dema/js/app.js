// ============================================
// RESPONIX DESKTOP APPLICATION
// Main Application Logic
// ============================================

let currentModule = 'dashboard';
let selectedConversationId = 1;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLanguageSwitcher();
    initSearch();
    initInboxTabs();
    renderDashboard();
    renderInbox();
    initAnimations();
});

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-module]');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const module = item.getAttribute('data-module');
            switchModule(module);

            // Update active state
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

function switchModule(module) {
    currentModule = module;

    // Hide all modules
    document.querySelectorAll('.module').forEach(m => {
        m.classList.remove('active');
    });

    // Show target module
    const target = document.getElementById(`module-${module}`);
    if (target) {
        target.classList.add('active');
    }

    // Update page title and breadcrumb
    const pageTitle = document.getElementById('pageTitle');
    const navKey = `nav.${module}`;
    if (pageTitle && translations[currentLang][navKey]) {
        pageTitle.textContent = translations[currentLang][navKey];
    }
    updateBreadcrumb();

    // Re-trigger animations for dashboard
    if (module === 'dashboard') {
        setTimeout(initAnimations, 50);
    }
}

// ============================================
// LANGUAGE SWITCHER
// ============================================
function initLanguageSwitcher() {
    const switcher = document.getElementById('langSwitcher');
    if (switcher) {
        switcher.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }
}

// ============================================
// SEARCH
// ============================================
function initSearch() {
    const searchInput = document.querySelector('.global-search input');
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchInput.style.borderColor = 'var(--success)';
                setTimeout(() => {
                    searchInput.style.borderColor = '';
                }, 300);
            }
        });
    }
}

// ============================================
// DASHBOARD RENDERING
// ============================================
function renderDashboard() {
    renderActivityList();
    renderInsightsList();
    updateChartLabels();
}

function renderActivityList() {
    const container = document.getElementById('activityList');
    if (!container) return;

    const isAr = currentLang === 'ar';
    container.innerHTML = demoData.activities.map((activity, index) => {
        let icon, title;
        switch(activity.type) {
            case 'booking':
                icon = '✓';
                title = t('activity.bookingConfirmed', { name: isAr ? activity.nameAr || activity.name : activity.name });
                break;
            case 'lead':
                icon = '★';
                title = t('activity.leadQualified', { name: isAr ? activity.nameAr || activity.name : activity.name });
                break;
            case 'payment':
                icon = 'ر.س';
                title = t('activity.paymentReceived', { name: isAr ? activity.nameAr || activity.name : activity.name, amount: activity.amount });
                break;
            case 'escalated':
                icon = '!';
                title = t('activity.escalated', { name: isAr ? activity.nameAr || activity.name : activity.name });
                break;
            case 'ai':
                icon = 'AI';
                title = t('activity.aiHandled', { name: isAr ? activity.nameAr || activity.name : activity.name });
                break;
            case 'followup':
                icon = '↻';
                title = t('activity.followUp', { name: isAr ? activity.nameAr || activity.name : activity.name });
                break;
            default:
                icon = '•';
                title = activity.detail;
        }

        return `
            <div class="activity-item" data-animate="fade-up" data-delay="${index}">
                <div class="activity-icon ${activity.icon}">${icon}</div>
                <div class="activity-content">
                    <div class="activity-text">${title}</div>
                    <div class="activity-time">${isAr ? activity.timeAr : activity.time}</div>
                </div>
            </div>
        `;
    }).join('');
}

function renderInsightsList() {
    const container = document.getElementById('insightsList');
    if (!container) return;

    container.innerHTML = demoData.insights.map((insight, index) => `
        <div class="insight-item" data-animate="fade-up" data-delay="${index}">
            <div class="insight-icon">${insight.icon}</div>
            <div class="insight-content">
                <div class="insight-title">${t(insight.title)}</div>
                <div class="insight-desc">${t(insight.desc)}</div>
            </div>
        </div>
    `).join('');
}

function updateChartLabels() {
    const labelsContainer = document.querySelector('.chart-labels');
    if (!labelsContainer) return;

    const isAr = currentLang === 'ar';
    const labels = isAr ? demoData.revenueChart.labelsAr : demoData.revenueChart.labels;
    labelsContainer.innerHTML = labels.map(label => `<span>${label}</span>`).join('');
}

// ============================================
// INBOX RENDERING
// ============================================
function renderInbox() {
    renderConversationList();
    renderChatWindow(selectedConversationId);
    renderProfilePanel(selectedConversationId);
}

function initInboxTabs() {
    const tabs = document.querySelectorAll('.inbox-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderConversationList(tab.getAttribute('data-filter'));
        });
    });
}

function renderConversationList(filter = 'all') {
    const container = document.getElementById('conversationList');
    if (!container) return;

    const isAr = currentLang === 'ar';
    let conversations = demoData.conversations;

    if (filter === 'unread') {
        conversations = conversations.filter(c => c.unread);
    } else if (filter === 'ai') {
        conversations = conversations.filter(c => c.badge === 'ai');
    } else if (filter === 'escalated') {
        conversations = conversations.filter(c => c.badge === 'escalated');
    }

    container.innerHTML = conversations.map(conv => {
        const isActive = conv.id === selectedConversationId;
        const name = isAr ? conv.nameAr : conv.name;
        const message = isAr ? conv.lastMessageAr : conv.lastMessage;
        const time = isAr ? conv.timeAr : conv.time;
        const badgeText = isAr ? conv.badgeAr : conv.badge;

        return `
            <div class="conversation-item ${isActive ? 'active' : ''}" data-id="${conv.id}" onclick="selectConversation(${conv.id})">
                <div class="conv-avatar">${conv.avatar}</div>
                <div class="conv-body">
                    <div class="conv-header">
                        <span class="conv-name">${name}</span>
                        <span class="conv-time">${time}</span>
                    </div>
                    <div class="conv-preview">${message}</div>
                    <div class="conv-meta">
                        <span class="conv-badge ${conv.badge}">${badgeText}</span>
                        ${conv.unread ? '<span class="unread-dot"></span>' : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function selectConversation(id) {
    selectedConversationId = id;
    renderConversationList(document.querySelector('.inbox-tab.active')?.getAttribute('data-filter') || 'all');
    renderChatWindow(id);
    renderProfilePanel(id);
}

function renderChatWindow(convId) {
    const header = document.getElementById('chatHeader');
    const messagesContainer = document.getElementById('chatMessages');
    const suggestedContainer = document.getElementById('suggestedReplies');

    const conv = getConversation(convId);
    if (!conv) return;

    const isAr = currentLang === 'ar';

    // Update header
    document.getElementById('chatAvatar').textContent = conv.avatar;
    document.getElementById('chatName').textContent = isAr ? conv.nameAr : conv.name;
    document.getElementById('chatStatus').textContent = t(`status.${conv.status}`);

    // Render messages
    messagesContainer.innerHTML = `
        <div class="chat-date-divider">${t('time.today')}</div>
        ${conv.messages.map((msg, index) => {
            const text = isAr ? msg.textAr : msg.text;
            const isOutgoing = msg.type === 'outgoing';
            return `
                <div class="message-group ${isOutgoing ? 'outgoing' : 'incoming'}" style="animation: messageSlide 0.3s ease ${index * 0.05}s forwards; opacity: 0;">
                    <div class="message-bubble">${text.replace(/\n/g, '<br>')}</div>
                    <span class="message-time">${index === conv.messages.length - 1 ? t('time.now') : `${index * 2}m`}</span>
                </div>
            `;
        }).join('')}
    `;

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Render suggested replies
    const replies = getSuggestedReplies(convId, currentLang);
    suggestedContainer.innerHTML = replies.map(reply => `
        <button class="suggestion-chip">${reply}</button>
    `).join('');
}

function renderProfilePanel(convId) {
    const conv = getConversation(convId);
    if (!conv) return;

    const isAr = currentLang === 'ar';

    document.getElementById('profileAvatar').textContent = conv.avatar;
    document.getElementById('profileName').textContent = isAr ? conv.nameAr : conv.name;
    document.getElementById('profilePhone').textContent = conv.phone;

    // Tags
    const tagsContainer = document.getElementById('profileTags');
    const tags = isAr ? conv.tagsAr : conv.tags;
    tagsContainer.innerHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Lead score
    const scoreValue = document.querySelector('.score-value');
    const scoreLabel = document.querySelector('.score-label');
    const scoreFill = document.querySelector('.score-fill');

    if (scoreValue) scoreValue.textContent = conv.leadScore;
    if (scoreLabel) {
        const labelKey = `profile.${conv.leadScoreLabel}Lead`;
        scoreLabel.textContent = t(labelKey);
        scoreLabel.style.color = conv.leadScore >= 80 ? 'var(--success)' : conv.leadScore >= 60 ? 'var(--warning)' : 'var(--text-muted)';
    }
    if (scoreFill) {
        const circumference = 2 * Math.PI * 42;
        const offset = circumference - (conv.leadScore / 100) * circumference;
        scoreFill.style.strokeDashoffset = offset;
    }

    // Assigned to
    const assignedName = document.querySelector('.user-name-sm');
    const assignedRole = document.querySelector('.user-role-sm');
    const assignedAvatar = document.querySelector('.user-avatar-sm');

    if (assignedName) assignedName.textContent = isAr ? conv.assignedTo.nameAr : conv.assignedTo.name;
    if (assignedRole) assignedRole.textContent = isAr ? conv.assignedTo.roleAr : conv.assignedTo.role;
    if (assignedAvatar) assignedAvatar.textContent = conv.assignedTo.initials;

    // AI Summary
    const summary = document.getElementById('aiSummary');
    if (summary) summary.textContent = isAr ? conv.summaryAr : conv.summary;

    // Suggested replies in profile
    const suggestionList = document.getElementById('suggestionList');
    const replies = getSuggestedReplies(convId, currentLang);
    if (suggestionList) {
        suggestionList.innerHTML = replies.map(reply => `
            <button class="suggestion-chip">${reply}</button>
        `).join('');
    }
}

// ============================================
// ANIMATIONS (Play Once)
// ============================================
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Add keyframe for messages
const style = document.createElement('style');
style.textContent = `
    @keyframes messageSlide {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Expose functions globally
window.renderDashboard = renderDashboard;
window.renderInbox = renderInbox;
window.selectConversation = selectConversation;
window.updateBreadcrumb = updateBreadcrumb;
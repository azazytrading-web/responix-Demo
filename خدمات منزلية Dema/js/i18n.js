// ============================================
// RESPONIX I18N - Bilingual Support
// English & Arabic (RTL)
// ============================================

const translations = {
    en: {
        // Navigation
        "nav.main": "Main",
        "nav.dashboard": "Dashboard",
        "nav.inbox": "Inbox",
        "nav.customers": "Customers",
        "nav.calendar": "Calendar",
        "nav.analytics": "Analytics",
        "nav.automation": "Automation",
        "nav.reports": "Reports",
        "nav.settings": "Settings",
        "role.admin": "Admin",
        "role.agent": "Agent",

        // Breadcrumb
        "breadcrumb.home": "Home",

        // Footer
        "footer.demoVersion": "Demo Version",
        "footer.designedBy": "Designed & Engineered by",
        "footer.version": "Version 1.0 MVP",

        // Period
        "period.last7Days": "Last 7 Days",
        "period.last30Days": "Last 30 Days",
        "period.thisMonth": "This Month",

        // Search
        "search.placeholder": "Search...",

        // Dashboard
        "dashboard.revenue": "Revenue",
        "dashboard.newLeads": "New Leads",
        "dashboard.activeConversations": "Active Conversations",
        "dashboard.todaysJobs": "Today\'s Jobs",
        "dashboard.aiResponseRate": "AI Response Rate",
        "dashboard.vsYesterday": "vs yesterday",
        "dashboard.today": "today",
        "dashboard.newToday": "new today",
        "dashboard.scheduled": "scheduled",
        "dashboard.avgResponse": "avg response",
        "dashboard.revenueChart": "Revenue Overview",
        "dashboard.leadFunnel": "Lead Funnel",
        "dashboard.recentActivity": "Recent Activity",
        "dashboard.aiInsights": "AI Insights",

        // Funnel
        "funnel.inquiries": "Inquiries",
        "funnel.qualified": "Qualified",
        "funnel.quoted": "Quoted",
        "funnel.booked": "Booked",
        "funnel.completed": "Completed",

        // Activity
        "activity.bookingConfirmed": "Booking confirmed for <strong>{name}</strong> — AC Cleaning, 3 units",
        "activity.leadQualified": "Lead <strong>{name}</strong> marked as qualified by AI",
        "activity.paymentReceived": "Payment received from <strong>{name}</strong> — SAR {amount}",
        "activity.escalated": "Conversation with <strong>{name}</strong> escalated to Fahad Khan",
        "activity.aiHandled": "AI handled inquiry from <strong>{name}</strong> automatically",
        "activity.followUp": "Follow-up sent to <strong>{name}</strong> for pending quote",

        // Insights
        "insight.peakHours": "Peak Hours",
        "insight.peakHoursDesc": "Most inquiries arrive between 6-9 PM. Consider extending AI coverage.",
        "insight.conversion": "Conversion Boost",
        "insight.conversionDesc": "Customers who get AI response within 30s are 4x more likely to book.",
        "insight.recovery": "Lead Recovery",
        "insight.recoveryDesc": "3 cold leads from last week re-engaged and 1 converted to booking.",

        // Inbox
        "inbox.search": "Search conversations...",
        "inbox.all": "All",
        "inbox.unread": "Unread",
        "inbox.aiHandled": "AI Handled",
        "inbox.escalated": "Escalated",
        "chat.typeMessage": "Type a message...",
        "chat.aiAssistant": "AI Assistant",

        // Profile
        "profile.customerProfile": "Customer Profile",
        "profile.aiSummary": "AI Summary",
        "profile.suggestedReplies": "Suggested Replies",
        "profile.leadScore": "Lead Score",
        "profile.assignedTo": "Assigned To",
        "profile.bookAppointment": "Book Appointment",
        "profile.markQualified": "Mark Qualified",
        "profile.hotLead": "Hot Lead",
        "profile.warmLead": "Warm Lead",
        "profile.coldLead": "Cold Lead",

        // Placeholder
        "placeholder.comingSoon": "Coming soon",

        // Time
        "time.now": "Now",
        "time.minAgo": "{n}m ago",
        "time.hourAgo": "{n}h ago",
        "time.today": "Today",
        "time.yesterday": "Yesterday",

        // Status
        "status.online": "Online",
        "status.offline": "Offline",
        "status.away": "Away",
        "status.typing": "typing..."
    },

    ar: {
        // Navigation
        "nav.main": "الرئيسية",
        "nav.dashboard": "لوحة التحكم",
        "nav.inbox": "البريد الوارد",
        "nav.customers": "العملاء",
        "nav.calendar": "التقويم",
        "nav.analytics": "التحليلات",
        "nav.automation": "الأتمتة",
        "nav.reports": "التقارير",
        "nav.settings": "الإعدادات",
        "role.admin": "مدير",
        "role.agent": "موظف",

        // Breadcrumb
        "breadcrumb.home": "الرئيسية",

        // Footer
        "footer.demoVersion": "نسخة تجريبية",
        "footer.designedBy": "تصميم وتطوير",
        "footer.version": "الإصدار ١.٠ MVP",

        // Period
        "period.last7Days": "آخر ٧ أيام",
        "period.last30Days": "آخر ٣٠ يوم",
        "period.thisMonth": "هذا الشهر",

        // Search
        "search.placeholder": "البحث...",

        // Dashboard
        "dashboard.revenue": "الإيرادات",
        "dashboard.newLeads": "عملاء جدد",
        "dashboard.activeConversations": "محادثات نشطة",
        "dashboard.todaysJobs": "مهام اليوم",
        "dashboard.aiResponseRate": "معدل رد الذكاء الاصطناعي",
        "dashboard.vsYesterday": "مقارنة بالأمس",
        "dashboard.today": "اليوم",
        "dashboard.newToday": "جديدة اليوم",
        "dashboard.scheduled": "مجدولة",
        "dashboard.avgResponse": "متوسط الرد",
        "dashboard.revenueChart": "نظرة عامة على الإيرادات",
        "dashboard.leadFunnel": "قمع العملاء",
        "dashboard.recentActivity": "النشاط الأخير",
        "dashboard.aiInsights": "رؤى الذكاء الاصطناعي",

        // Funnel
        "funnel.inquiries": "الاستفسارات",
        "funnel.qualified": "المؤهلون",
        "funnel.quoted": "تم عرض السعر",
        "funnel.booked": "تم الحجز",
        "funnel.completed": "مكتملة",

        // Activity
        "activity.bookingConfirmed": "تم تأكيد الحجز لـ <strong>{name}</strong> — تنظيف مكيف، ٣ وحدات",
        "activity.leadQualified": "العميل <strong>{name}</strong> تم تأهيله تلقائياً",
        "activity.paymentReceived": "تم استلام الدفع من <strong>{name}</strong> — {amount} ر.س",
        "activity.escalated": "تم تصعيد محادثة <strong>{name}</strong> إلى فهد خان",
        "activity.aiHandled": "الذكاء الاصطناعي تعامل مع استفسار <strong>{name}</strong> تلقائياً",
        "activity.followUp": "تم إرسال متابعة إلى <strong>{name}</strong> لعرض السعر المعلق",

        // Insights
        "insight.peakHours": "ساعات الذروة",
        "insight.peakHoursDesc": "معظم الاستفسارات تصل بين ٦-٩ مساءً. فكر في تمديد تغطية الذكاء الاصطناعي.",
        "insight.conversion": "تعزيز التحويل",
        "insight.conversionDesc": "العملاء الذين يحصلون على رد خلال ٣٠ ثانية هم أكثر احتمالية للحجز بـ ٤ أضعاف.",
        "insight.recovery": "استعادة العملاء",
        "insight.recoveryDesc": "٣ عملاء باردة من الأسبوع الماضي تم إعادة التفاعل معهم وتحويل واحد إلى حجز.",

        // Inbox
        "inbox.search": "البحث في المحادثات...",
        "inbox.all": "الكل",
        "inbox.unread": "غير مقروء",
        "inbox.aiHandled": "تمت معالجته بالذكاء الاصطناعي",
        "inbox.escalated": "تم التصعيد",
        "chat.typeMessage": "اكتب رسالة...",
        "chat.aiAssistant": "المساعد الذكي",

        // Profile
        "profile.customerProfile": "ملف العميل",
        "profile.aiSummary": "ملخص الذكاء الاصطناعي",
        "profile.suggestedReplies": "ردود مقترحة",
        "profile.leadScore": "درجة العميل المحتمل",
        "profile.assignedTo": "مسند إلى",
        "profile.bookAppointment": "حجز موعد",
        "profile.markQualified": "وضع علامة مؤهل",
        "profile.hotLead": "عميل ساخن",
        "profile.warmLead": "عميل دافئ",
        "profile.coldLead": "عميل بارد",

        // Placeholder
        "placeholder.comingSoon": "قريباً",

        // Time
        "time.now": "الآن",
        "time.minAgo": "منذ {n} د",
        "time.hourAgo": "منذ {n} س",
        "time.today": "اليوم",
        "time.yesterday": "أمس",

        // Status
        "status.online": "متصل",
        "status.offline": "غير متصل",
        "status.away": "بعيد",
        "status.typing": "يكتب..."
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update HTML titles
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) {
        const activeModule = document.querySelector('.module.active');
        if (activeModule) {
            const moduleId = activeModule.id.replace('module-', '');
            const navKey = `nav.${moduleId}`;
            if (translations[lang][navKey]) {
                pageTitle.textContent = translations[lang][navKey];
            }
        }
    }

    // Update breadcrumb
    updateBreadcrumb();

    // Update language switcher UI
    const switcher = document.getElementById('langSwitcher');
    if (switcher) {
        switcher.querySelector('.lang-flag').textContent = lang === 'en' ? '🇺🇸' : '🇸🇦';
        switcher.querySelector('.lang-code').textContent = lang.toUpperCase();
    }

    // Re-render dynamic content
    if (window.renderDashboard) renderDashboard();
    if (window.renderInbox) renderInbox();
}

function t(key, params = {}) {
    let text = translations[currentLang][key] || translations['en'][key] || key;
    Object.keys(params).forEach(k => {
        text = text.replace(`{${k}}`, params[k]);
    });
    return text;
}

function updateBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;
    const activeModule = document.querySelector('.module.active');
    if (!activeModule) return;
    const moduleId = activeModule.id.replace('module-', '');
    const navKey = `nav.${moduleId}`;
    const moduleName = t(navKey);
    const homeText = t('breadcrumb.home');
    breadcrumb.innerHTML = `
        <span>${homeText}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        <span>${moduleName}</span>
    `;
}
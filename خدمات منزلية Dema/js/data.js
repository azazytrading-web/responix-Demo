// ============================================
// RESPONIX DEMO DATA
// Realistic static data for Home Service Company
// ============================================

const demoData = {
    // Dashboard Stats
    stats: {
        revenue: { value: 12450, change: 24, prefix: 'SAR ' },
        leads: { value: 24, change: 6 },
        conversations: { value: 18, change: 5 },
        jobs: { value: 7, change: 0 },
        aiRate: { value: '94.2%', responseTime: '1.2s' }
    },

    // Revenue Chart Data (7 days)
    revenueChart: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labelsAr: ['الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'],
        data: [8200, 9500, 7800, 11200, 9800, 13500, 12450]
    },

    // Lead Funnel
    funnel: [
        { stage: 'inquiries', value: 48, width: '100%' },
        { stage: 'qualified', value: 36, width: '75%' },
        { stage: 'quoted', value: 24, width: '50%' },
        { stage: 'booked', value: 17, width: '35%' },
        { stage: 'completed', value: 12, width: '25%' }
    ],

    // Recent Activity
    activities: [
        { type: 'booking', icon: 'green', name: 'Ahmed Al-Khaldi', nameAr: 'أحمد الخالدي', time: '2m ago', timeAr: 'منذ ٢ د', detail: 'AC Cleaning, 3 units' },
        { type: 'lead', icon: 'blue', name: 'Sarah Fahd', nameAr: 'سارة فهد', time: '5m ago', timeAr: 'منذ ٥ د', detail: 'Qualified by AI' },
        { type: 'payment', icon: 'green', name: 'Mohammed Al-Otaibi', nameAr: 'محمد العتيبي', time: '12m ago', timeAr: 'منذ ١٢ د', amount: '450' },
        { type: 'escalated', icon: 'orange', name: 'Layla Nasser', nameAr: 'ليلى ناصر', time: '18m ago', timeAr: 'منذ ١٨ د', agent: 'Fahad Khan' },
        { type: 'ai', icon: 'purple', name: 'Khalid Al-Rashid', nameAr: 'خالد الراشد', time: '25m ago', timeAr: 'منذ ٢٥ د', detail: 'Auto-handled' },
        { type: 'followup', icon: 'blue', name: 'Noura Al-Saud', nameAr: 'نورة السعود', time: '32m ago', timeAr: 'منذ ٣٢ د', detail: 'Pending quote' }
    ],

    // AI Insights
    insights: [
        { icon: '⏰', title: 'insight.peakHours', desc: 'insight.peakHoursDesc' },
        { icon: '📈', title: 'insight.conversion', desc: 'insight.conversionDesc' },
        { icon: '💰', title: 'insight.recovery', desc: 'insight.recoveryDesc' }
    ],

    // Conversations
    conversations: [
        {
            id: 1,
            name: 'Ahmed Al-Khaldi',
            nameAr: 'أحمد الخالدي',
            avatar: 'AK',
            phone: '+966 50 123 4567',
            status: 'online',
            lastMessage: 'Perfect, see you at 2 PM',
            lastMessageAr: 'ممتاز، أراك الساعة ٢',
            time: '2m',
            timeAr: '٢ د',
            unread: true,
            badge: 'ai',
            badgeAr: 'ذكاء اصطناعي',
            leadScore: 90,
            leadScoreLabel: 'hot',
            assignedTo: { name: 'Fahad Khan', nameAr: 'فهد خان', initials: 'FK', role: 'Senior Agent', roleAr: 'موظف أول' },
            tags: ['AC Cleaning', 'Repeat'],
            tagsAr: ['تنظيف مكيف', 'متكرر'],
            summary: 'Customer inquired about AC cleaning for 3 units in Al-Narjis, Riyadh. Previously used service 2 months ago. High intent, budget confirmed. Ready to book today.',
            summaryAr: 'استفسار العميل عن تنظيف مكيف ٣ وحدات في حي النرجس، الرياض. استخدم الخدمة سابقاً قبل شهرين. نية شراء عالية، الميزانية مؤكدة. جاهز للحجز اليوم.',
            messages: [
                { type: 'incoming', text: 'Hello, I need AC cleaning for 3 units today if possible', textAr: 'السلام عليكم، محتاج تنظيف مكيف ٣ وحدات اليوم لو ممكن' },
                { type: 'outgoing', text: 'Hello! We can definitely help. How many units do you have and in which area?', textAr: 'وعليكم السلام! أكيد نقدر نساعدك. كم مكيف عندك؟ وفي أي منطقة؟' },
                { type: 'incoming', text: '3 units in Al-Narjis, Riyadh', textAr: 'عندي ٣ مكيفات في الرياض - حي النرجس' },
                { type: 'outgoing', text: 'Great. We have a technician available today at 2 PM. Does that work for you?', textAr: 'ممتاز. عندنا فني متوفر اليوم الساعة ٢ الظهر. يناسبك؟' },
                { type: 'incoming', text: 'Yes perfect', textAr: 'نعم تمام' },
                { type: 'outgoing', text: 'Booking confirmed! 🎉\n\n📅 Today at 2:00 PM\n📍 Al-Narjis, Riyadh\n🔧 3 AC units - Cleaning\n💰 Price: SAR 299\n\nTechnician will call before arrival.', textAr: 'تم تأكيد الحجز! 🎉\n\n📅 اليوم الساعة ٢:٠٠ ظهراً\n📍 الرياض - حي النرجس\n🔧 ٣ مكيفات - تنظيف\n💰 السعر: ٢٩٩ ر.س\n\nسيتواصل الفني قبل الوصول.' }
            ]
        },
        {
            id: 2,
            name: 'Sarah Fahd',
            nameAr: 'سارة فهد',
            avatar: 'SF',
            phone: '+966 55 987 6543',
            status: 'online',
            lastMessage: 'Plumbing service inquiry',
            lastMessageAr: 'استفسار خدمة سباكة',
            time: '5m',
            timeAr: '٥ د',
            unread: true,
            badge: 'new',
            badgeAr: 'جديد',
            leadScore: 75,
            leadScoreLabel: 'warm',
            assignedTo: { name: 'Fahad Khan', nameAr: 'فهد خان', initials: 'FK', role: 'Senior Agent', roleAr: 'موظف أول' },
            tags: ['Plumbing', 'New'],
            tagsAr: ['سباكة', 'جديد'],
            summary: 'New customer asking about plumbing repair for kitchen sink leak. Budget range SAR 200-400. Needs service within 2 days. Location: Al-Malqa, Riyadh.',
            summaryAr: 'عميلة جديدة تستفسر عن إصلاح تسرب حوض المطبخ. الميزانية ٢٠٠-٤٠٠ ر.س. تحتاج الخدمة خلال يومين. الموقع: الملقا، الرياض.',
            messages: [
                { type: 'incoming', text: 'Hi, I have a leak under my kitchen sink. Can you help?', textAr: 'مرحباً، عندي تسرب تحت حوض المطبخ. تقدرون تساعدون؟' },
                { type: 'outgoing', text: 'Of course! Is it a constant leak or intermittent? And what area are you in?', textAr: 'بالتأكيد! هل التسرب مستمر أم متقطع؟ وفي أي منطقة أنت؟' }
            ]
        },
        {
            id: 3,
            name: 'Mohammed Al-Otaibi',
            nameAr: 'محمد العتيبي',
            avatar: 'MO',
            phone: '+966 54 456 7890',
            status: 'offline',
            lastMessage: 'Moving quote request',
            lastMessageAr: 'طلب عرض سعر نقل أثاث',
            time: '12m',
            timeAr: '١٢ د',
            unread: false,
            badge: 'escalated',
            badgeAr: 'تم التصعيد',
            leadScore: 60,
            leadScoreLabel: 'warm',
            assignedTo: { name: 'Omar Saleh', nameAr: 'عمر صالح', initials: 'OS', role: 'Agent', roleAr: 'موظف' },
            tags: ['Moving', 'Quote'],
            tagsAr: ['نقل', 'عرض سعر'],
            summary: 'Customer requesting moving quote for 3-bedroom apartment from Riyadh to Jeddah. Large furniture including 2 sofas, dining set, and beds. Needs service next weekend.',
            summaryAr: 'العميل يطلب عرض سعر لنقل شقة ٣ غرف من الرياض إلى جدة. أثاث كبير يشمل ٢ كنب، طعام، وأسرة. يحتاج الخدمة نهاية الأسبوع القادم.',
            messages: [
                { type: 'incoming', text: 'I need a quote for moving from Riyadh to Jeddah. 3 bedroom apartment.', textAr: 'أحتاج عرض سعر للنقل من الرياض إلى جدة. شقة ٣ غرف.' },
                { type: 'outgoing', text: 'We\'d be happy to help with your move. Could you share more details about the furniture?', textAr: 'يسعدنا مساعدتك في النقل. هل يمكنك مشاركة تفاصيل أكثر عن الأثاث؟' },
                { type: 'incoming', text: '2 sofas, dining table with 6 chairs, 3 beds, wardrobes, and some boxes.', textAr: '٢ كنب، طاولة طعام مع ٦ كراسي، ٣ أسرة، خزائن، وبعض الصناديق.' }
            ]
        },
        {
            id: 4,
            name: 'Layla Nasser',
            nameAr: 'ليلى ناصر',
            avatar: 'LN',
            phone: '+966 56 789 0123',
            status: 'away',
            lastMessage: 'Deep cleaning inquiry',
            lastMessageAr: 'استفسار تنظيف عميق',
            time: '18m',
            timeAr: '١٨ د',
            unread: false,
            badge: 'ai',
            badgeAr: 'ذكاء اصطناعي',
            leadScore: 85,
            leadScoreLabel: 'hot',
            assignedTo: { name: 'Fahad Khan', nameAr: 'فهد خان', initials: 'FK', role: 'Senior Agent', roleAr: 'موظف أول' },
            tags: ['Cleaning', 'Deep Clean'],
            tagsAr: ['تنظيف', 'تنظيف عميق'],
            summary: 'Repeat customer requesting deep cleaning for villa before Eid. 5 bedrooms, 3 bathrooms, living areas. Preferred date: next Thursday. Budget flexible.',
            summaryAr: 'عميلة متكررة تطلب تنظيف عميق للفيلا قبل العيد. ٥ غرف، ٣ حمامات، مناطق معيشة. التاريخ المفضل: الخميس القادم. الميزانية مرنة.',
            messages: [
                { type: 'incoming', text: 'I need deep cleaning for my villa before Eid. 5 bedrooms, 3 baths.', textAr: 'أحتاج تنظيف عميق للفيلا قبل العيد. ٥ غرف نوم، ٣ حمامات.' },
                { type: 'outgoing', text: 'We can arrange that. Would next Thursday work for you?', textAr: 'نقدر نرتب ذلك. هل الخميس القادم يناسبك؟' }
            ]
        },
        {
            id: 5,
            name: 'Khalid Al-Rashid',
            nameAr: 'خالد الراشد',
            avatar: 'KR',
            phone: '+966 50 321 6547',
            status: 'online',
            lastMessage: 'Electrical installation quote',
            lastMessageAr: 'عرض سعر تركيب كهرباء',
            time: '25m',
            timeAr: '٢٥ د',
            unread: false,
            badge: 'ai',
            badgeAr: 'ذكاء اصطناعي',
            leadScore: 70,
            leadScoreLabel: 'warm',
            assignedTo: { name: 'Omar Saleh', nameAr: 'عمر صالح', initials: 'OS', role: 'Agent', roleAr: 'موظف' },
            tags: ['Electrical', 'New'],
            tagsAr: ['كهرباء', 'جديد'],
            summary: 'New customer inquiring about electrical installation for new office space. Needs lighting, outlets, and AC connections. Location: Al-Olaya. Urgent request.',
            summaryAr: 'عميل جديد يستفسر عن تركيب كهرباء لمكتب جديد. يحتاج إضاءة، فيش، وتوصيلات مكيفات. الموقع: العليا. طلب عاجل.',
            messages: [
                { type: 'incoming', text: 'I need an electrician for my new office in Al-Olaya. Lighting and outlets.', textAr: 'أحتاج كهربائي لمكتبي الجديد في العليا. إضاءة وفيش.' },
                { type: 'outgoing', text: 'We can help with that. How big is the office space?', textAr: 'نقدر نساعدك. كم مساحة المكتب؟' }
            ]
        },
        {
            id: 6,
            name: 'Noura Al-Saud',
            nameAr: 'نورة السعود',
            avatar: 'NS',
            phone: '+966 55 147 2583',
            status: 'offline',
            lastMessage: 'Pending quote follow-up',
            lastMessageAr: 'متابعة عرض سعر معلق',
            time: '32m',
            timeAr: '٣٢ د',
            unread: false,
            badge: 'escalated',
            badgeAr: 'تم التصعيد',
            leadScore: 45,
            leadScoreLabel: 'cold',
            assignedTo: { name: 'Fahad Khan', nameAr: 'فهد خان', initials: 'FK', role: 'Senior Agent', roleAr: 'موظف أول' },
            tags: ['Painting', 'Follow-up'],
            tagsAr: ['دهان', 'متابعة'],
            summary: 'Customer received painting quote 5 days ago but hasn\'t responded. AI sent follow-up message. Waiting for confirmation to proceed with booking.',
            summaryAr: 'العميلة تلقت عرض سعر دهان قبل ٥ أيام ولم ترد. الذكاء الاصطناعي أرسل رسالة متابعة. في انتظار التأكيد للمضي في الحجز.',
            messages: [
                { type: 'outgoing', text: 'Hi Noura, just following up on the painting quote we sent. Any questions?', textAr: 'مرحباً نورة، متابعة لعرض السعر اللي أرسلناه. عندك أي أسئلة؟' },
                { type: 'incoming', text: 'I\'m still deciding on the color. Will get back to you soon.', textAr: 'لسه أقرر اللون. برد عليك قريب.' }
            ]
        }
    ],

    // Suggested Replies per conversation
    suggestedReplies: {
        en: {
            1: ['Confirm 2 PM slot', 'Offer discount', 'Send technician details'],
            2: ['Send pricing', 'Ask for photos', 'Schedule visit'],
            3: ['Send detailed quote', 'Ask about elevator', 'Confirm date'],
            4: ['Confirm Thursday', 'Send team details', 'Offer package deal'],
            5: ['Schedule assessment', 'Send portfolio', 'Confirm urgency'],
            6: ['Send color catalog', 'Offer discount', 'Schedule call']
        },
        ar: {
            1: ['تأكيد موعد الساعة ٢', 'عرض خصم', 'إرسال تفاصيل الفني'],
            2: ['إرسال الأسعار', 'طلب صور', 'جدولة زيارة'],
            3: ['إرسال عرض سعر مفصل', 'السؤال عن المصعد', 'تأكيد التاريخ'],
            4: ['تأكيد الخميس', 'إرسال تفاصيل الفريق', 'عرض باقة'],
            5: ['جدولة تقييم', 'إرسال أعمال سابقة', 'تأكيد العجلة'],
            6: ['إرسال كتالوج ألوان', 'عرض خصم', 'جدولة مكالمة']
        }
    }
};

// Helper to get conversation by ID
function getConversation(id) {
    return demoData.conversations.find(c => c.id === id);
}

// Helper to get suggested replies
function getSuggestedReplies(convId, lang) {
    const langData = demoData.suggestedReplies[lang] || demoData.suggestedReplies['en'];
    return langData[convId] || ['Reply 1', 'Reply 2', 'Reply 3'];
}
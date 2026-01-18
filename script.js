// ===== DATA =====
const COMMON_EMOJIS = [
    // 😀 Faces & emotions
    "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚", "🙂",
    "🤗", "🤩", "🤔", "🤨", "😐", "😑", "😶", "🫥", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "😴",
    "😌", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹️", "🙁", "😖", "😞", "😟", "😤",
    "😢", "😭", "😦", "😧", "😨", "😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵", "😵‍💫", "😡", "😠",
    "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😇", "🤠", "🥳", "🥺", "🤥", "🤫", "🤭", "🫢", "🫣", "🫡", "🫠",

    // 👋 Hands & gestures
    "👍", "👎", "👏", "🙌", "🤝", "🤜", "🤛", "✊", "👊", "🤟", "🤘", "👌", "🤌", "🤏", "👈", "👉", "👆", "👇", "✋",
    "🤚", "🖐️", "🖖", "👋", "🤙", "💪", "🦾", "🫶", "🙏", "✍️", "🫰",

    // 👀 Body parts
    "👀", "👁️", "👁️‍🗨️", "🧠", "🫀", "🫁", "👄", "👅", "👂", "👃", "👣", "🦷", "🦴",

    // 🧑 People & fantasy
    "👶", "🧒", "👦", "👧", "🧑", "👨", "👩", "🧓", "👴", "👵", "👨‍⚕️", "👩‍⚕️", "👨‍🎓", "👩‍🎓", "👨‍💻",
    "👩‍💻", "👨‍🏫", "👩‍🏫", "👨‍🍳", "👩‍🍳", "👨‍🚀", "👩‍🚀", "👨‍🎤", "👩‍🎤", "👮", "🕵️", "💂", "🥷",
    "🧙", "🧝", "🧛", "🧟", "🧞", "🧜", "🧚", "🧌", "👼", "🤶", "🎅", "🦸", "🦹",

    // 🌍 Nature & space
    "🌍", "🌎", "🌏", "🌐", "🪐", "☀️", "🌤️", "⛅", "🌥️", "☁️", "🌦️", "🌧️", "⛈️", "🌩️", "❄️", "☃️", "⛄",
    "🌬️", "💨", "🌪️", "🌈", "🌊", "🔥", "💥", "✨", "💫", "⭐", "🌟", "🌙", "🌑", "🌓", "🌕", "🌗", "🌋", "🏔️",
    "⛰️", "🏝️", "🏜️", "🌵", "🌲", "🌳", "🌴", "🌱", "🌿", "☘️", "🍀", "🌸", "🌺", "🌻", "🌼", "🌷", "🌹",

    // 🐶 Animals
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🙈", "🙉", "🙊",
    "🐒", "🐔", "🐧", "🐦", "🐤", "🐥", "🦆", "🦅", "🦉", "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🦋", "🐌", "🐞",
    "🐜", "🪲", "🐢", "🐍", "🦎", "🐙", "🦑", "🦐", "🦀", "🐠", "🐟", "🐬", "🦈", "🐳", "🐋", "🦭", "🐊", "🦧",
    "🦮", "🐕", "🐩", "🐈", "🐈‍⬛",

    // 🍎 Food & drink
    "🍎", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🥬",
    "🥒", "🌶️", "🌽", "🥕", "🥔", "🍠", "🥐", "🥖", "🍞", "🥨", "🥯", "🧀", "🥚", "🍳", "🧈", "🥞", "🧇", "🥓",
    "🥩", "🍗", "🍖", "🌭", "🍔", "🍟", "🍕", "🥪", "🥙", "🌮", "🌯", "🍣", "🍤", "🍜", "🍝", "🍛", "🍚", "🍙",
    "🍱", "🥗", "🍿", "🧂", "🍩", "🍪", "🍰", "🧁", "🥧", "🍫", "🍬", "🍭", "🍮", "☕", "🍵", "🥤", "🧃", "🧋",
    "🍺", "🍻", "🍷", "🥂", "🍸", "🍹", "🍾",

    // ⚽ Sports & activities
    "⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🥏", "🎱", "🏓", "🏸", "🥅", "🏒", "🏑", "🥍", "🏏", "⛳",
    "🏹", "🥊", "🥋", "🛹", "🛼", "🚴", "🏂", "⛷️", "🏄", "🏊", "🤸", "🧗", "🤼", "🤽", "🧘", "🏃", "🕺", "💃",

    // 🎵 Music & arts
    "🎵", "🎶", "🎼", "🎤", "🎧", "🎸", "🥁", "🎺", "🎷", "🎹", "🎻", "📻", "🎙️", "🎚️", "🎛️", "📀", "💿", "📼",
    "🎥", "🎬", "🎞️", "📽️", "🎨", "🖌️", "🖍️", "📝",

    // 🧳 Travel & transport
    "🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚒", "🚐", "🛻", "🚚", "🚛", "🚜", "🛵", "🏍️", "🚲", "🛴",
    "✈️", "🛫", "🛬", "🚀", "🛸", "🚁", "🛶", "⛵", "🚤", "🛥️", "🛳️", "🚢", "🚉", "🚆", "🚇", "🚊",

    // 💡 Objects & misc
    "📱", "💻", "⌨️", "🖱️", "🖥️", "🖨️", "📺", "📷", "📸", "📹", "📞", "☎️", "📟", "📡", "🔋", "🔌", "💡", "🔦",
    "🕯️", "🧯", "🛢️", "💰", "💸", "💳", "🪙", "🧲", "🔑", "🗝️", "🚪", "🪑", "🛏️", "🛋️", "🧸", "🎁", "🎈",

    // ❤️ Symbols
    "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💯",
    "✔️", "❌", "❗", "❓", "⚠️", "🚫", "♻️", "✨", "🔥", "⭐", "🏆", "🥇", "🥈", "🥉"
];


const DEFAULT_SHORTCUTS = {
    b: { action: "bold", label: "Bold" },
    i: { action: "italic", label: "Italic" },
    u: { action: "underline", label: "Underline" },
    s: { action: "strikethrough", label: "Strike" },
    k: { action: "codeblock", label: "Code Block" },
    l: { action: "spoiler", label: "Spoiler" },
    1: { action: "h1", label: "Header 1" },
    2: { action: "h2", label: "Header 2" },
    3: { action: "h3", label: "Header 3" },
    '-': { action: "list", label: "Unordered List" },
    '>': { action: "quote", label: "Quote" },
    '`': { action: "inlinecode", label: "Inline Code" },
};

let userSettings = {
    fontSize: 14,
    theme: "gray",
    nitro: false,
    helpers: true,
    shortcuts: JSON.parse(JSON.stringify(DEFAULT_SHORTCUTS)),
};

let cards = JSON.parse(localStorage.getItem("dc-md-cards") || "[]");
let currentCardId = localStorage.getItem('dc-md-current-card') || null;

// ===== DOM =====
const editor = document.getElementById("editor");
const previewContent = document.getElementById("previewContent");
const charCountDisplay = document.getElementById("charCountDisplay");
const wordCountDisplay = document.getElementById("wordCountDisplay");
const toolbar = document.getElementById("toolbar");
const saveStatus = document.getElementById("saveStatus");
const lastSaved = document.getElementById("lastSaved");

const PRESETS = {
    announcement:
        "# 📢 Announcement\n\n**Hello @everyone!**\n\n> We have exciting news.\n\n### Highlights:\n- Update 1\n- Update 2\n\nThanks for being here!",
    rules:
        "# 📜 Server Rules\n\n1. **Respect Everyone** - Be kind.\n2. **No Spam** - Keep chat clean.\n3. **Safe Content** - No NSFW.\n\n||Read carefully!||",
    welcome:
        "### 👋 Welcome to the server!\n\nWe are glad to have you.\nPlease check <#1234> for rules.\n\n**Enjoy your stay!**",
    embed:
        ">>> **Title of Fake Embed**\n*Description text goes here...*\n\n__**Fields**__\n**Name:** Value\n**Name:** Value\n\n`Footer Text`",
    poll:
        "# 📊 Poll\n\n**What's your favorite color?**\n\n- 🔵 Blue\n- 🔴 Red\n- 🟢 Green\n- 🟡 Yellow\n\nVote below!",
    event:
        "# 🎉 Event Announcement\n\n**Join us for a fun event!**\n\n**Date:** <t:1640995200:F>\n**Time:** 7 PM EST\n\nDetails: https://example.com\n\nRSVP in <#1234>!",
    code: "```javascript\nconsole.log('Hello World!');\n```",
    quote: "> This is a blockquote.\n> It can span multiple lines.",
    table:
        "| Header 1 | Header 2 |\n|----------|----------|\n| Cell 1   | Cell 2   |",
    formatting:
        "# Formatting Examples\n\n**Bold Text**\n*Italic Text*\n__Underline__\n~~Strikethrough~~\n`Inline Code`\n\n> Blockquote\n\n- List Item 1\n- List Item 2\n\n1. Ordered Item 1\n2. Ordered Item 2",
    links: "[Link Text](https://example.com)\n\n||Spoiler Text||\n\n<t:1640995200:F> Timestamp",
    advanced:
        "# Advanced Markdown\n\n### Code Blocks\n```python\nprint('Hello, World!')\n```\n\n### Tables\n| Feature | Status |\n|---------|--------|\n| Bold    | ✅     |\n| Italic  | ✅     |\n\n### Spoilers\n||Hidden Content||\n\n### Timestamps\n<t:1640995200:R> Relative\n<t:1640995200:t> Short Time\n<t:1640995200:D> Long Date",
    fun:
        "# Fun Stuff\n\n🎉 Party Time! 🎉\n\n😀 Emojis everywhere! 😎\n\n> Wise words: \"Code is poetry.\"\n\n- Dance moves\n- Sing songs\n- Have fun!\n\n||Secret: This is hidden!||"
};

// ===== INIT =====
window.onload = () => {
    loadSettings();
    renderToolbar();
    renderEmojis();
    loadDraft();

    // Timestamp default
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const tsInput = document.getElementById("tsDate");
    if (tsInput) tsInput.value = now.toISOString().slice(0, 16);

    // Clock
    setInterval(() => {
        const d = new Date();
        const el = document.getElementById("clock");
        if (el)
            el.innerText = d.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            });
    }, 1000);

    // Cards
    loadCards();
    renderCards();
    updateStats();
    saveHistory();
    updateSaveStatus();
    renderPreview();
    // Add paste listener for link merging
    editor.addEventListener('paste', handlePaste);
    initResizer();
};

// ===== HELPERS =====
function escapeHTML(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function linkify(html) {
    // safe linkify (not in code blocks placeholder)
    const urlRe = /((https?:\/\/|www\.)[^\s<]+)/gi;
    return html.replace(urlRe, (url) => {
        const href = url.startsWith("http") ? url : `http://${url}`;
        return `<a href="${escapeHTML(href)}" target="_blank" rel="noopener noreferrer">${escapeHTML(
            url
        )}</a>`;
    });
}

function formatDiscordTimestamp(sec, fmt) {
    const d = new Date(Number(sec) * 1000);
    if (isNaN(d)) return "Invalid time";
    const shortTime = d.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
    const longTime = d.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    const dateShort = d.toLocaleDateString();
    const dateLong = d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const weekday = d.toLocaleDateString(undefined, { weekday: "long" });

    if (fmt === "R") {
        const diff = Date.now() - d.getTime();
        const abs = Math.abs(diff);
        const secs = Math.round(abs / 1000);
        const mins = Math.round(secs / 60);
        const hours = Math.round(mins / 60);
        const days = Math.round(hours / 24);
        let txt =
            secs < 60
                ? `${secs} seconds`
                : mins < 60
                    ? `${mins} minutes`
                    : hours < 24
                        ? `${hours} hours`
                        : `${days} days`;
        return diff >= 0 ? `${txt} ago` : `in ${txt}`;
    }
    if (fmt === "t") return shortTime;
    if (fmt === "T") return longTime;
    if (fmt === "d") return dateShort;
    if (fmt === "D") return dateLong;
    if (fmt === "f") return `${dateLong} ${shortTime}`;
    if (fmt === "F") return `${weekday}, ${dateLong} ${shortTime}`;
    return `${dateLong} ${shortTime}`;
}

// ===== PREVIEW RENDERER (improved) =====
function renderPreview() {
    let raw = editor.value || "";

    // Extract triple backtick code blocks first -> placeholders
    const codeBlocks = [];
    raw = raw.replace(/```([\s\S]*?)```/g, (m, code) => {
        const idx = codeBlocks.length;
        codeBlocks.push(code);
        return `@@CODEBLOCK_${idx}@@`;
    });

    // Escape HTML
    let text = escapeHTML(raw);

    // Blockquotes (>>>, >)
    text = text.replace(
        /^&gt;&gt;&gt;([\s\S]*?)$/gm,
        '<blockquote>$1</blockquote>'
    );
    text = text.replace(/^&gt; (.*)$/gm, "<blockquote>$1</blockquote>");

    // Timestamps <t:unix:format> (escaped)
    text = text.replace(
        /&lt;t:(\d+):([a-zA-Z])&gt;/g,
        (_m, sec, fmt) =>
            `<span class="bg-[#41434a] rounded px-1 text-xs py-0.5">${formatDiscordTimestamp(
                sec,
                fmt
            )}</span>`
    );

    // Inline code
    text = text.replace(
        /`([^`]+)`/g,
        '<code class="bg-[#1e1f22] px-1 rounded text-xs">$1</code>'
    );

    // Bold/Italic/Underline/Strike (basic, non-nested safety)
    text = text
        .replace(/\*\*\*([^\*]+)\*\*\*/g, "<b><em>$1</em></b>")
        .replace(/\*\*([^\*]+)\*\*/g, "<b>$1</b>")
        .replace(/\*([^\*]+)\*/g, "<em>$1</em>")
        .replace(/__([^_]+)__/g, "<u>$1</u>")
        .replace(/~~([^~]+)~~/g, "<del>$1</del>");

    // Headers
    text = text
        .replace(/^# (.*)$/gm, '<h1 class="text-xl font-bold mt-2 mb-1">$1</h1>')
        .replace(
            /^## (.*)$/gm,
            '<h2 class="text-lg font-bold mt-2 mb-1">$1</h2>'
        )
        .replace(
            /^### (.*)$/gm,
            '<h3 class="text-base font-bold mt-2 mb-1">$1</h3>'
        );

    // Spoilers
    text = text.replace(
        /\|\|(.*?)\|\|/g,
        `<span class="bg-[#1e1f22] text-transparent rounded px-1 cursor-pointer hover:bg-gray-700 hover:text-white transition" onclick="this.classList.toggle('text-transparent')">$1</span>`
    );

    // Parse lists per line
    const lines = text.split(/\r?\n/);
    let out = [];
    let inUL = false;
    let inOL = false;

    const closeLists = () => {
        if (inUL) {
            out.push("</ul>");
            inUL = false;
        }
        if (inOL) {
            out.push("</ol>");
            inOL = false;
        }
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Unordered: - or •
        if (/^\s*(?:-|\u2022)\s+/.test(line)) {
            if (!inUL) {
                closeLists();
                out.push("<ul>");
                inUL = true;
            }
            out.push("<li>" + line.replace(/^\s*(?:-|\u2022)\s+/, "") + "</li>");
            continue;
        }

        // Ordered: 1. 2.
        if (/^\s*\d+\.\s+/.test(line)) {
            if (!inOL) {
                closeLists();
                out.push("<ol>");
                inOL = true;
            }
            out.push("<li>" + line.replace(/^\s*\d+\.\s+/, "") + "</li>");
            continue;
        }

        // Blank line closes lists
        if (/^\s*$/.test(line)) {
            closeLists();
            out.push("");
            continue;
        }

        // Normal paragraph-ish line
        closeLists();
        out.push(line);
    }
    closeLists();
    text = out.join("\n");

    // Linkify (after markup)
    text = linkify(text);

    // Newlines → <br> (before code blocks to avoid interfering with <pre>)
    text = text.replace(/\n/g, "<br>");

    // Replace code block placeholders with syntax highlighting
    text = text.replace(/@@CODEBLOCK_(\d+)@@/g, (m, idx) => {
        const code = codeBlocks[Number(idx)] || "";
        const lang = code.split('\n')[0].trim() || 'javascript'; // Default to javascript if no lang
        const codeContent = code.split('\n').slice(1).join('\n') || code;
        const highlighted = Prism.highlight(codeContent, Prism.languages[lang] || Prism.languages.javascript, lang);
        return `<pre class="language-${lang}"><code class="language-${lang}">${highlighted}</code></pre>`;
    });

    previewContent.innerHTML = text;
    // Apply syntax highlighting
    Prism.highlightAllUnder(previewContent);
}

// ===== SETTINGS =====
function loadSettings() {
    const saved = localStorage.getItem("dc-md-settings");
    if (saved) {
        const parsed = JSON.parse(saved);
        userSettings = { ...userSettings, ...parsed };
        // Merge shortcuts to include new defaults
        userSettings.shortcuts = { ...DEFAULT_SHORTCUTS, ...parsed.shortcuts };
    } else {
        userSettings.shortcuts = { ...DEFAULT_SHORTCUTS };
    }
    applySettingsDOM();
}

function saveSettings() {
    userSettings.fontSize = Number(
        document.getElementById("settingFontSize").value
    );
    userSettings.theme = document.getElementById("settingTheme").value;
    userSettings.nitro = document.getElementById("settingNitro").checked;
    userSettings.showWordCount = document.getElementById("settingShowWordCount").checked;
    userSettings.autoSaveDrafts = document.getElementById("settingAutoSaveDrafts").checked;
    userSettings.syntaxHighlighting = document.getElementById("settingSyntaxHighlighting").checked;

    localStorage.setItem("dc-md-settings", JSON.stringify(userSettings));
    applySettingsDOM();
    renderToolbar();
}

function applySettingsDOM() {
    document.documentElement.style.setProperty(
        "--font-size",
        userSettings.fontSize + "px"
    );

    // Reset theme classes and set new
    document.body.className = document.body.className
        .replace(/theme-\w+/g, "")
        .trim();
    document.body.classList.add("theme-" + userSettings.theme);

    // Inputs
    document.getElementById("settingFontSize").value = userSettings.fontSize;
    document.getElementById("settingTheme").value = userSettings.theme;
    document.getElementById("settingNitro").checked = userSettings.nitro;
    document.getElementById("settingShowWordCount").checked = userSettings.showWordCount;
    document.getElementById("settingAutoSaveDrafts").checked = userSettings.autoSaveDrafts;
    document.getElementById("settingSyntaxHighlighting").checked = userSettings.syntaxHighlighting;

    // Apply new settings
    const wordCountEl = document.getElementById("wordCountDisplay");
    if (wordCountEl) {
        wordCountEl.style.display = userSettings.showWordCount ? "" : "none";
    }
    // Syntax highlighting is handled in renderPreview
    updateStats();
}

function renderShortcutsSettings() {
    const container = document.getElementById("shortcutList");
    container.innerHTML = "";
    for (const [key, val] of Object.entries(userSettings.shortcuts)) {
        container.innerHTML += `
          <div class="flex justify-between items-center text-sm border-b border-gray-700 pb-2">
            <span>${val.label}</span>
            <div class="flex items-center gap-2">
              <span class="text-gray-500 text-xs">CTRL +</span>
              <input type="text" value="${key.toUpperCase()}" onchange="updateShortcut('${key}', this.value)" class="w-8 text-center bg-black rounded text-white font-mono">
            </div>
          </div>`;
    }
}

function updateShortcut(oldKey, newKey) {
    newKey = (newKey || "").toLowerCase();
    if (!newKey || userSettings.shortcuts[newKey]) return;
    userSettings.shortcuts[newKey] = userSettings.shortcuts[oldKey];
    delete userSettings.shortcuts[oldKey];
    renderShortcutsSettings();
}

// ===== TOOLBAR =====
function renderToolbar() {
    const tools = [
        { icon: "fa-bold", func: "wrapText('**')", tooltip: "Bold" },
        { icon: "fa-italic", func: "wrapText('*')", tooltip: "Italic" },
        { icon: "fa-underline", func: "wrapText('__')", tooltip: "Underline" },
        {
            icon: "fa-strikethrough",
            func: "wrapText('~~')",
            tooltip: "Strike",
        },
        { separator: true },
        { icon: "fa-terminal", func: "wrapText('`')", tooltip: "Inline Code" },
        {
            icon: "fa-code",
            func: "wrapText('```\\n', '\\n```')",
            tooltip: "Block Code",
        },
        { icon: "fa-eye-slash", func: "wrapText('||')", tooltip: "Spoiler" },
        { separator: true },
        { icon: "fa-heading", func: "insertLineStart('# ')", tooltip: "H1" },
        { icon: "fa-list-ul", func: "insertLineStart('- ')", tooltip: "List" },
        {
            icon: "fa-quote-right",
            func: "insertLineStart('> ')",
            tooltip: "Quote",
        },
        { separator: true },
        { icon: "fa-clock", func: "toggleModal('timestampModal')", tooltip: "Timestamp" },
        { icon: "fa-face-smile", func: "toggleModal('emojiModal')", tooltip: "Emoji" },
        { icon: "fa-file-lines", func: "toggleModal('presetModal')", tooltip: "Presets" },
    ];

    let html = "";
    tools.forEach((t) => {
        if (t.separator)
            html += `<div class="w-px h-6 bg-gray-600 mx-2 inline-block align-middle"></div>`;
        else
            html += `<button onclick="${t.func}" title="${t.tooltip}" class="w-8 h-8 rounded hover:bg-gray-700 text-gray-300 transition inline-flex items-center justify-center">
            <i class="fa-solid ${t.icon}"></i></button>`;
    });
    toolbar.innerHTML = html;
}

function insertAtCursor(text, move = 0) {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const v = editor.value;
    editor.value = v.slice(0, start) + text + v.slice(end);
    const newPos = start + text.length + move;
    editor.focus();
    editor.setSelectionRange(newPos, newPos);
    renderPreview();
    updateStats();
    queueSave();
}

function wrapText(startTag, endTag = startTag) {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const v = editor.value;
    const sel = v.substring(start, end);
    const rep = startTag + sel + endTag;
    editor.value = v.substring(0, start) + rep + v.substring(end);
    const selStart = start + startTag.length;
    const selEnd = selStart + sel.length;
    editor.focus();
    editor.setSelectionRange(selStart, selEnd);
    renderPreview();
    updateStats();
    queueSave();
}

function insertLineStart(tag) {
    const start = editor.selectionStart;
    const v = editor.value;
    const lineStart = v.lastIndexOf("\n", start - 1) + 1;
    editor.value = v.substring(0, lineStart) + tag + v.substring(lineStart);
    const newPos = start + tag.length;
    editor.focus();
    editor.setSelectionRange(newPos, newPos);
    renderPreview();
    updateStats();
    queueSave();
}

// ===== PRESETS =====
function renderPresets() {
    const grid = document.getElementById("presetGrid");
    grid.innerHTML = Object.keys(PRESETS)
        .map(
            (key) =>
                `<button onclick="applyPreset('${key}')" class="p-3 bg-gray-800 hover:bg-discord-blurple rounded text-left text-sm">${key
                    .charAt(0)
                    .toUpperCase() + key.slice(1)}</button>`
        )
        .join("");
}

function applyPreset(type) {
    let content = PRESETS[type];
    if (editor.value.length > 10 && !confirm("Replace current content?"))
        return;
    editor.value = content || "";
    renderPreview();
    updateStats();
    saveHistory();
    queueSave();
    toggleModal("presetModal");
}

// ===== CARDS (single panel; dedup fixed) =====
function sanitizeCards(arr) {
    // Remove invalid, dedup by id
    const map = new Map();
    (arr || []).forEach((c) => {
        if (!c || !c.id) return;
        if (!map.has(c.id))
            map.set(c.id, {
                id: String(c.id),
                name: String(c.name || "Untitled"),
                content: String(c.content || ""),
                created: c.created || new Date().toISOString(),
            });
    });
    return Array.from(map.values());
}

function loadCards() {
    cards = sanitizeCards(JSON.parse(localStorage.getItem("dc-md-cards") || "[]"));
    if (cards.length === 0) {
        createCard(true); // silent create first
    } else {
        // Load last selected card or default to first
        if (!currentCardId || !cards.find(c => c.id === currentCardId)) {
            currentCardId = cards[0].id;
        }
        loadCard(currentCardId);
    }
    saveCards(); // persist sanitized state
}

function createCard(silent = false) {
    const id = Date.now().toString();
    const card = {
        id,
        name: `Card ${cards.length + 1}`,
        content: "",
        created: new Date().toISOString(),
    };
    cards.push(card);
    cards = sanitizeCards(cards);
    currentCardId = id;
    localStorage.setItem('dc-md-current-card', currentCardId);
    saveCards();
    renderCards();
    loadCard(id);
    if (!silent) flashStatus("Card created");
}

function loadCard(id) {
    const card = cards.find((c) => c.id === id);
    if (card) {
        editor.value = card.content;
        currentCardId = id;
        localStorage.setItem('dc-md-current-card', currentCardId);
        renderPreview();
        updateStats();
        saveHistory();
        renderCards();
    }
}

function saveCard() {
    if (!currentCardId) return;
    const i = cards.findIndex((c) => c.id === currentCardId);
    if (i !== -1) {
        cards[i].content = editor.value;
        saveCards();
        updateSaveStatus(false);
    }
}

function deleteCard(id) {
    if (cards.length <= 1) {
        alert("Cannot delete the last card.");
        return;
    }
    const index = cards.findIndex(c => c.id === id);
    cards = cards.filter((c) => c.id !== id);
    if (id === currentCardId) {
        currentCardId = cards[Math.max(0, index - 1)]?.id || cards[0]?.id || null;
    }
    localStorage.setItem('dc-md-current-card', currentCardId);
    saveCards();
    renderCards();
    if (currentCardId) loadCard(currentCardId);
    flashStatus("Card deleted");
}

function renameCard(id, newName) {
    if (!newName) return;
    const card = cards.find((c) => c.id === id);
    if (card) {
        card.name = newName;
        saveCards();
        renderCards();
    }
}

function saveCards() {
    localStorage.setItem("dc-md-cards", JSON.stringify(cards));
}

function renderCards() {
    const list = document.getElementById("cardsList");
    const items = cards
        .map(
            (card, index) => `
          <div class="p-4 rounded mb-2 cursor-pointer ${card.id === currentCardId ? "bg-discord-blurple" : "bg-gray-800"} cursor-move" draggable="true" data-id="${card.id}" data-index="${index}" ondragstart="dragStart(event)" ondragover="dragOver(event)" ondrop="dropCard(event)" onclick="loadCard('${card.id}')">
            <div class="flex justify-between items-center gap-2">
              <button class="text-sm font-semibold text-left truncate flex-1" onclick="loadCard('${card.id
                }')">${escapeHTML(card.name)}</button>
              <div class="flex gap-1 shrink-0">
                <button onclick="renameCard('${card.id
                }', prompt('New name:', '${escapeHTML(
                    card.name
                )}'))" class="text-xs text-gray-200 hover:text-white"><i class="fa-solid fa-pen"></i></button>
                <button onclick="deleteCard('${card.id
                }')" class="text-xs text-red-200 hover:text-red-400"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
            <div class="text-[10px] text-gray-400">${new Date(
                    card.created
                ).toLocaleDateString()}</div>
          </div>`
        )
        .join("");
    list.innerHTML = items || `<div class="text-xs text-gray-500">No cards</div>`;
}

let draggedIndex = null;

function dragStart(event) {
    draggedIndex = parseInt(event.target.dataset.index);
    event.dataTransfer.effectAllowed = 'move';
}

function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}

function dropCard(event) {
    event.preventDefault();
    const targetIndex = parseInt(event.target.closest('[data-index]').dataset.index);
    if (draggedIndex !== null && draggedIndex !== targetIndex) {
        const [removed] = cards.splice(draggedIndex, 1);
        cards.splice(targetIndex, 0, removed);
        saveCards();
        renderCards();
    }
    draggedIndex = null;
}

function toggleCardsPanel() {
    const panel = document.getElementById("cardsPanel");
    panel.classList.toggle("hidden");
}

// ===== EMOJIS =====
function renderEmojis() {
    const grid = document.getElementById("emojiGrid");
    if (!grid) return;
    grid.innerHTML = "";
    COMMON_EMOJIS.forEach((e) => {
        const btn = document.createElement("button");
        btn.className = "text-xl hover:bg-gray-700 rounded p-1";
        btn.textContent = e;
        btn.title = e;
        btn.onclick = () => {
            insertAtCursor(e);
            editor.focus();
        };
        grid.appendChild(btn);
    });
}

function filterEmojis() {
    const q = (document.getElementById("emojiSearch").value || "").toLowerCase();
    const grid = document.getElementById("emojiGrid");
    if (!grid) return;
    grid.querySelectorAll("button").forEach((btn) => {
        btn.style.display = btn.textContent.toLowerCase().includes(q) ? "" : "none";
    });
}

// ===== TIMESTAMPS =====
function insertSpecificTimestamp(fmt) {
    const input = document.getElementById("tsDate");
    const date = input && input.value ? new Date(input.value) : new Date();
    const unix = Math.floor(date.getTime() / 1000);
    const tag = `<t:${unix}:${fmt}>`;
    insertAtCursor(tag);
    toggleModal("timestampModal");
}

// ===== UTIL =====
function toggleModal(id) {
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const willOpen = !el.classList.contains("active");
    document.querySelectorAll(".modal.active").forEach((m) => m.classList.remove("active"));
    if (willOpen) {
        el.classList.add("active");
        // Render shortcuts if opening settings modal
        if (id === 'settingsModal') {
            renderShortcutsSettings();
        }
        // Add outside click listener
        el.addEventListener('click', (e) => {
            if (e.target === el) {
                toggleModal(id);
            }
        });
    }
}

function switchTab(tab) {
    document.getElementById("mainView").classList.add("hidden");
    document.getElementById("previewView").classList.add("hidden");
    document.getElementById("tab-editor").classList.remove("active");
    document.getElementById("tab-preview").classList.remove("active");

    if (tab === "editor") {
        document.getElementById("mainView").classList.remove("hidden");
        document.getElementById("tab-editor").classList.add("active");
    } else {
        document.getElementById("previewView").classList.remove("hidden");
        document.getElementById("tab-preview").classList.add("active");
    }
}

function updateSaveStatus(isSaving = false) {
    if (isSaving) {
        saveStatus.innerText = "Saving…";
        saveStatus.classList.add("pulse");
        return;
    }
    lastSaved.innerText = new Date().toLocaleTimeString();
    saveStatus.innerText = "All changes saved";
    saveStatus.classList.remove("pulse");
}

function flashStatus(msg) {
    saveStatus.innerText = msg;
    saveStatus.classList.add("pulse");
    setTimeout(() => updateSaveStatus(false), 1200);
}

function updateStats() {
    const len = editor.value.length;
    const words = editor.value.trim() ? editor.value.trim().split(/\s+/).length : 0;
    const limit = userSettings.nitro ? 4000 : 2000;
    charCountDisplay.innerText = `${len}/${limit}`;
    wordCountDisplay.innerText = `${words} words`;
    charCountDisplay.className =
        len > limit
            ? "text-xs font-mono bg-red-900 text-white px-2 py-1 rounded"
            : "text-xs font-mono bg-gray-800 px-2 py-1 rounded";
}

function saveDraft() {
    localStorage.setItem("dc-md-draft", editor.value);
}
function loadDraft() {
    const d = localStorage.getItem("dc-md-draft");
    if (d) editor.value = d;
}

function toggleExportDropdown() {
    const dropdown = document.getElementById('exportDropdown');
    dropdown.classList.toggle('hidden');
}

function downloadText(format) {
    let content = editor.value;
    let filename = `discord-message-${new Date().toISOString().replace(/[:.]/g, '-')}`;
    let mimeType = 'text/plain';

    if (format === 'md') {
        filename += '.md';
    } else if (format === 'html') {
        content = `<html><body>${previewContent.innerHTML}</body></html>`;
        mimeType = 'text/html';
        filename += '.html';
    } else {
        filename += '.txt';
    }

    const blob = new Blob([content], { type: mimeType });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
    toggleExportDropdown(); // Hide dropdown after export
}

// Undo/Redo
let history = [""],
    historyIndex = 0;
function saveHistory() {
    if (history[historyIndex] !== editor.value) {
        history = history.slice(0, historyIndex + 1);
        history.push(editor.value);
        historyIndex++;
        if (history.length > 50) {
            history.shift();
            historyIndex--;
        }
    }
}
function undoAction() {
    if (historyIndex > 0) {
        historyIndex--;
        editor.value = history[historyIndex];
        renderPreview();
        updateStats();
    }
}
function redoAction() {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        editor.value = history[historyIndex];
        renderPreview();
        updateStats();
    }
}

// Debounced save (single input handler)
let saveTimeout;
function queueSave() {
    updateSaveStatus(true);
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        saveCard();
        saveDraft();
        updateSaveStatus(false);
    }, 600);
}

editor.addEventListener("input", () => {
    saveHistory();
    renderPreview();
    updateStats();
    queueSave();
});

// Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document
            .querySelectorAll(".modal.active")
            .forEach((m) => m.classList.remove("active"));
        return;
    }
    if (e.ctrlKey) {
        const key = e.key.toLowerCase();
        if (userSettings.shortcuts[key]) {
            e.preventDefault();
            const action = userSettings.shortcuts[key].action;
            if (action === "bold") wrapText("**");
            if (action === "italic") wrapText("*");
            if (action === "underline") wrapText("__");
            if (action === "strikethrough") wrapText("~~");
            if (action === "codeblock") wrapText("```\n", "\n```");
            if (action === "spoiler") wrapText("||");
            if (action === "h1") insertLineStart("# ");
            if (action === "h2") insertLineStart("## ");
            if (action === "h3") insertLineStart("### ");
            if (action === "list") insertLineStart("- ");
            if (action === "quote") insertLineStart("> ");
            if (action === "inlinecode") wrapText("`");
        }
    }
});

function handlePaste(event) {
    const pastedText = (event.clipboardData || window.clipboardData).getData('text');
    const urlRegex = /^https?:\/\/[^\s]+$/;
    if (urlRegex.test(pastedText.trim())) {
        event.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const selectedText = editor.value.substring(start, end);
        const linkText = selectedText || pastedText;
        const markdownLink = `[${linkText}](${pastedText})`;
        editor.value = editor.value.substring(0, start) + markdownLink + editor.value.substring(end);
        const newPos = start + markdownLink.length;
        editor.focus();
        editor.setSelectionRange(newPos, newPos);
        renderPreview();
        updateStats();
        queueSave();
    }
}

function initResizer() {
    const resizer = document.getElementById('resizer');
    const mainView = document.getElementById('mainView');
    const previewView = document.getElementById('previewView');
    let isResizing = false;
    let startX, startWidth;

    const savedRatio = localStorage.getItem('dc-md-split-ratio') || 0.5;
    mainView.style.flex = savedRatio;
    previewView.style.flex = 1 - savedRatio;

    resizer.addEventListener('mousedown', (e) => {
        isResizing = true;
        startX = e.clientX;
        startWidth = mainView.getBoundingClientRect().width;
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const newWidth = startWidth + dx;
        const totalWidth = mainView.parentElement.getBoundingClientRect().width;
        const ratio = Math.max(0.2, Math.min(0.8, newWidth / totalWidth));
        mainView.style.flex = ratio;
        previewView.style.flex = 1 - ratio;
        localStorage.setItem('dc-md-split-ratio', ratio);
    });

    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        }
    });
}

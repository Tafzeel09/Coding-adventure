/* ============================================================
   CODING ADVENTURE — Game Data
   Lessons, Quizzes, Challenges, Achievements
   ============================================================ */

const GAME_DATA = {

  /* ── KINGDOMS ──────────────────────────────────────────── */
  kingdoms: {

    /* ═══════════════════ HTML KINGDOM ═══════════════════ */
    html: {
      id: 'html', name: 'HTML Kingdom', icon: '🏰',
      color: '#FF6B35', page: 'html.html',
      description: 'Master the building blocks of the web',
      lessons: [
        {
          id: 'html-headings', title: 'Headings', icon: '📝', xp: 10,
          intro: 'HTML headings (h1–h6) define page titles and subtitles. They create a hierarchy that helps users and search engines understand your content structure. h1 is the largest and most important; h6 is the smallest.',
          concepts: [
            'Use only ONE &lt;h1&gt; per page — it is the main title',
            'Headings h2–h6 create sub-sections in descending importance',
            'Never skip heading levels (e.g. h1 → h3) for styling purposes',
            'Screen readers navigate pages using heading structure',
            'Search engines rely on headings for SEO ranking signals'
          ],
          code: `<span class="cm">&lt;!-- HTML Headings Example --&gt;</span>
<span class="tag">&lt;h1&gt;</span>Main Page Title<span class="tag">&lt;/h1&gt;</span>
<span class="tag">&lt;h2&gt;</span>Section Heading<span class="tag">&lt;/h2&gt;</span>
<span class="tag">&lt;h3&gt;</span>Sub-section Heading<span class="tag">&lt;/h3&gt;</span>
<span class="tag">&lt;h4&gt;</span>Minor Heading<span class="tag">&lt;/h4&gt;</span>
<span class="tag">&lt;h5&gt;</span>Small Heading<span class="tag">&lt;/h5&gt;</span>
<span class="tag">&lt;h6&gt;</span>Smallest Heading<span class="tag">&lt;/h6&gt;</span>`,
          codeLang: 'HTML',
          tip: '🌟 Pro Tip: Use CSS to change heading font size/style. Never choose a heading level based on how it looks — use it based on document structure!',
          quiz: [
            { q: 'Which tag creates the <strong>largest</strong> heading in HTML?', opts: ['&lt;h6&gt;', '&lt;heading&gt;', '&lt;h1&gt;', '&lt;header&gt;'], ans: 2, exp: '&lt;h1&gt; is the largest and most important heading. HTML has 6 levels: h1 through h6.' },
            { q: 'How many heading levels does HTML provide?', opts: ['4', '5', '6', '8'], ans: 2, exp: 'HTML provides 6 heading levels: &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt;.' },
            { q: 'Which heading tag is the SMALLEST?', opts: ['&lt;h5&gt;', '&lt;h6&gt;', '&lt;small&gt;', '&lt;h4&gt;'], ans: 1, exp: '&lt;h6&gt; is the smallest/least important heading in HTML.' },
            { q: 'How many &lt;h1&gt; tags should a web page ideally have?', opts: ['As many as needed', 'Two', 'None', 'One'], ans: 3, exp: 'Best practice is to have exactly one &lt;h1&gt; per page — it represents the main topic of the page.' }
          ]
        },
        {
          id: 'html-paragraphs', title: 'Paragraphs & Text', icon: '📄', xp: 10,
          intro: 'The &lt;p&gt; tag defines a paragraph of text. HTML also provides tags for emphasizing text, creating line breaks, and adding inline formatting. These are the basic building blocks of readable web content.',
          concepts: [
            '&lt;p&gt; creates a block-level paragraph with auto spacing',
            '&lt;br&gt; inserts a single line break (self-closing)',
            '&lt;strong&gt; marks text as important (bold display)',
            '&lt;em&gt; emphasizes text (italic display)',
            '&lt;mark&gt; highlights text, &lt;del&gt; shows deleted text'
          ],
          code: `<span class="tag">&lt;p&gt;</span>This is a paragraph of text.<span class="tag">&lt;/p&gt;</span>

<span class="tag">&lt;p&gt;</span>
  This has <span class="tag">&lt;strong&gt;</span>bold text<span class="tag">&lt;/strong&gt;</span> and
  <span class="tag">&lt;em&gt;</span>italic text<span class="tag">&lt;/em&gt;</span> inline.
<span class="tag">&lt;/p&gt;</span>

<span class="tag">&lt;p&gt;</span>First line.<span class="tag">&lt;br&gt;</span>Second line same paragraph.<span class="tag">&lt;/p&gt;</span>

<span class="tag">&lt;p&gt;</span>Price: <span class="tag">&lt;mark&gt;</span>$9.99<span class="tag">&lt;/mark&gt;</span> — was <span class="tag">&lt;del&gt;</span>$19.99<span class="tag">&lt;/del&gt;</span><span class="tag">&lt;/p&gt;</span>`,
          codeLang: 'HTML',
          tip: '🌟 Pro Tip: Use &lt;strong&gt; and &lt;em&gt; for semantic meaning (importance / emphasis), not just for visual styling. Use CSS for visual-only styling.',
          quiz: [
            { q: 'Which HTML tag creates a paragraph?', opts: ['&lt;para&gt;', '&lt;p&gt;', '&lt;text&gt;', '&lt;txt&gt;'], ans: 1, exp: 'The &lt;p&gt; element defines a paragraph. It is a block-level element with top and bottom margins.' },
            { q: 'Which tag creates a line break in HTML?', opts: ['&lt;lb&gt;', '&lt;newline&gt;', '&lt;break&gt;', '&lt;br&gt;'], ans: 3, exp: '&lt;br&gt; inserts a single line break. It is a void (self-closing) element — no closing tag needed.' },
            { q: 'Which tag makes text appear BOLD and indicates importance?', opts: ['&lt;b&gt;', '&lt;bold&gt;', '&lt;strong&gt;', '&lt;thick&gt;'], ans: 2, exp: '&lt;strong&gt; is the semantic tag for important text (renders bold). &lt;b&gt; is stylistic-only bold without semantic meaning.' },
            { q: 'Which tag marks text as emphasized (italic)?', opts: ['&lt;i&gt;', '&lt;em&gt;', '&lt;italic&gt;', '&lt;stress&gt;'], ans: 1, exp: '&lt;em&gt; (emphasis) is the semantic italic tag. &lt;i&gt; is stylistic italic but has no semantic meaning.' }
          ]
        },
        {
          id: 'html-links', title: 'Links', icon: '🔗', xp: 10,
          intro: 'Links (hyperlinks) are what make the web interactive. The &lt;a&gt; anchor tag creates clickable links to other pages, sections, email addresses, or phone numbers. The href attribute defines the destination.',
          concepts: [
            '&lt;a href="url"&gt; creates a hyperlink — href = HyperText Reference',
            'target="_blank" opens link in a new browser tab',
            'Relative URLs (./page.html) link within your own site',
            'Absolute URLs (https://example.com) link to external sites',
            '&lt;a href="#section-id"&gt; jumps to a section on the same page'
          ],
          code: `<span class="cm">&lt;!-- External link in new tab --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="str">"https://google.com"</span> <span class="attr">target</span>=<span class="str">"_blank"</span><span class="tag">&gt;</span>Visit Google<span class="tag">&lt;/a&gt;</span>

<span class="cm">&lt;!-- Relative link (same site) --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="str">"./about.html"</span><span class="tag">&gt;</span>About Page<span class="tag">&lt;/a&gt;</span>

<span class="cm">&lt;!-- Email link --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="str">"mailto:hello@example.com"</span><span class="tag">&gt;</span>Email Us<span class="tag">&lt;/a&gt;</span>

<span class="cm">&lt;!-- Jump to section --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="str">"#contact"</span><span class="tag">&gt;</span>Go to Contact<span class="tag">&lt;/a&gt;</span>`,
          codeLang: 'HTML',
          tip: '🌟 Pro Tip: Always add rel="noopener noreferrer" when using target="_blank" for security reasons. Example: &lt;a href="..." target="_blank" rel="noopener noreferrer"&gt;',
          quiz: [
            { q: 'Which attribute specifies the link destination in &lt;a&gt;?', opts: ['src', 'link', 'href', 'url'], ans: 2, exp: 'The href (HyperText Reference) attribute specifies where the link goes. Example: &lt;a href="page.html"&gt;' },
            { q: 'How do you open a link in a new browser tab?', opts: ['target="_new"', 'target="_blank"', 'open="tab"', 'newtab="true"'], ans: 1, exp: 'target="_blank" opens the linked page in a new browser tab or window.' },
            { q: 'Which type of URL links to a page on the SAME website?', opts: ['Absolute URL', 'External URL', 'Relative URL', 'Static URL'], ans: 2, exp: 'Relative URLs (like ./about.html or ../contact.html) reference pages relative to the current page location.' },
            { q: 'What HTML tag is used to create a hyperlink?', opts: ['&lt;link&gt;', '&lt;href&gt;', '&lt;url&gt;', '&lt;a&gt;'], ans: 3, exp: 'The &lt;a&gt; (anchor) tag creates hyperlinks. The href attribute defines the link destination.' }
          ]
        },
        {
          id: 'html-images', title: 'Images', icon: '🖼️', xp: 10,
          intro: 'The &lt;img&gt; tag embeds images in a webpage. It is a self-closing (void) element, meaning it has no closing tag. The src attribute points to the image file, and alt provides text for accessibility.',
          concepts: [
            '&lt;img src="path.jpg" alt="description"&gt; — both src and alt are required',
            'alt text is shown if image fails to load and read by screen readers',
            'width and height attributes prevent layout shift while loading',
            'Images can be local files or external URLs',
            'Use srcset for responsive images on different screen sizes'
          ],
          code: `<span class="cm">&lt;!-- Basic image --&gt;</span>
<span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="str">"photo.jpg"</span> <span class="attr">alt</span>=<span class="str">"A beautiful sunset"</span><span class="tag">&gt;</span>

<span class="cm">&lt;!-- With dimensions --&gt;</span>
<span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="str">"logo.png"</span> <span class="attr">alt</span>=<span class="str">"Company logo"</span>
     <span class="attr">width</span>=<span class="str">"200"</span> <span class="attr">height</span>=<span class="str">"100"</span><span class="tag">&gt;</span>

<span class="cm">&lt;!-- External image --&gt;</span>
<span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="str">"https://example.com/pic.jpg"</span>
     <span class="attr">alt</span>=<span class="str">"Profile picture"</span><span class="tag">&gt;</span>`,
          codeLang: 'HTML',
          tip: '🌟 Pro Tip: Always write descriptive alt text! Instead of alt="image", write alt="A golden retriever puppy playing in snow". This helps visually impaired users and improves SEO.',
          quiz: [
            { q: 'Which tag is used to display an image in HTML?', opts: ['&lt;pic&gt;', '&lt;photo&gt;', '&lt;image&gt;', '&lt;img&gt;'], ans: 3, exp: 'The &lt;img&gt; tag embeds images. It is a self-closing (void) element — no closing tag needed.' },
            { q: 'Which attribute provides alternative text for an image?', opts: ['title', 'alt', 'text', 'desc'], ans: 1, exp: 'The alt attribute provides alternative text for accessibility and when images fail to load. It is essential for a11y.' },
            { q: 'Which attribute specifies the image file path?', opts: ['href', 'url', 'link', 'src'], ans: 3, exp: 'The src (source) attribute specifies the path or URL to the image file.' },
            { q: 'Is the &lt;img&gt; tag a self-closing (void) element?', opts: ['No, use &lt;/img&gt;', 'Yes, no closing tag', 'Depends on format', 'Only in XHTML'], ans: 1, exp: '&lt;img&gt; is a void element — it never has a closing tag. It stands alone as &lt;img src="..." alt="..."&gt;.' }
          ]
        },
        {
          id: 'html-lists', title: 'Lists', icon: '📋', xp: 10,
          intro: 'HTML provides three types of lists: ordered (numbered), unordered (bulleted), and description lists. Lists are perfect for grouping related items and are used heavily in navigation menus.',
          concepts: [
            '&lt;ul&gt; = Unordered list (bullet points)',
            '&lt;ol&gt; = Ordered list (numbered 1, 2, 3...)',
            '&lt;li&gt; = List Item — used inside both &lt;ul&gt; and &lt;ol&gt;',
            '&lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt; = Description list (term + definition)',
            'Lists can be nested inside each other for sub-menus'
          ],
          code: `<span class="cm">&lt;!-- Unordered List --&gt;</span>
<span class="tag">&lt;ul&gt;</span>
  <span class="tag">&lt;li&gt;</span>HTML<span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span>CSS<span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span>JavaScript<span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ul&gt;</span>

<span class="cm">&lt;!-- Ordered List --&gt;</span>
<span class="tag">&lt;ol&gt;</span>
  <span class="tag">&lt;li&gt;</span>Learn HTML<span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span>Learn CSS<span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span>Build Projects<span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ol&gt;</span>`,
          codeLang: 'HTML',
          tip: '🌟 Pro Tip: Navigation menus in real websites are almost always built with &lt;nav&gt;&lt;ul&gt;&lt;li&gt;&lt;a&gt; combinations — then styled with CSS to look like horizontal menus!',
          quiz: [
            { q: 'Which tag creates a <strong>numbered</strong> (ordered) list?', opts: ['&lt;ul&gt;', '&lt;list&gt;', '&lt;nl&gt;', '&lt;ol&gt;'], ans: 3, exp: '&lt;ol&gt; (Ordered List) creates a numbered list. Items are automatically numbered 1, 2, 3...' },
            { q: 'Which tag creates a <strong>bulleted</strong> (unordered) list?', opts: ['&lt;ul&gt;', '&lt;bl&gt;', '&lt;ol&gt;', '&lt;list&gt;'], ans: 0, exp: '&lt;ul&gt; (Unordered List) creates a bulleted list. Each item is marked with a bullet point by default.' },
            { q: 'Which tag creates individual items inside a list?', opts: ['&lt;item&gt;', '&lt;list-item&gt;', '&lt;li&gt;', '&lt;it&gt;'], ans: 2, exp: '&lt;li&gt; (List Item) defines each item in an ordered or unordered list.' },
            { q: 'Which tag creates a description / definition list?', opts: ['&lt;list&gt;', '&lt;dl&gt;', '&lt;def&gt;', '&lt;desc&gt;'], ans: 1, exp: '&lt;dl&gt; (Description List) is used with &lt;dt&gt; (term) and &lt;dd&gt; (definition) to create glossary-style lists.' }
          ]
        },
        {
          id: 'html-forms', title: 'Forms', icon: '📨', xp: 10,
          intro: 'Forms are how websites collect user input. The &lt;form&gt; tag groups form elements. Inside, you use &lt;input&gt;, &lt;textarea&gt;, &lt;select&gt;, and &lt;button&gt; elements to create interactive fields.',
          concepts: [
            'action attribute: where form data is sent on submit',
            'method attribute: GET (URL params) or POST (hidden body)',
            '&lt;input type="text|email|password|checkbox|radio|submit"&gt;',
            '&lt;label&gt; links to inputs using for="input-id"',
            'required, disabled, placeholder are common attributes'
          ],
          code: `<span class="tag">&lt;form</span> <span class="attr">action</span>=<span class="str">"/submit"</span> <span class="attr">method</span>=<span class="str">"post"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="str">"name"</span><span class="tag">&gt;</span>Your Name<span class="tag">&lt;/label&gt;</span>
  <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="str">"text"</span> <span class="attr">id</span>=<span class="str">"name"</span> <span class="attr">placeholder</span>=<span class="str">"Enter name"</span> <span class="attr">required</span><span class="tag">&gt;</span>

  <span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="str">"email"</span><span class="tag">&gt;</span>Email<span class="tag">&lt;/label&gt;</span>
  <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="str">"email"</span> <span class="attr">id</span>=<span class="str">"email"</span> <span class="attr">required</span><span class="tag">&gt;</span>

  <span class="tag">&lt;select</span> <span class="attr">name</span>=<span class="str">"topic"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="str">"html"</span><span class="tag">&gt;</span>HTML<span class="tag">&lt;/option&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="str">"css"</span><span class="tag">&gt;</span>CSS<span class="tag">&lt;/option&gt;</span>
  <span class="tag">&lt;/select&gt;</span>

  <span class="tag">&lt;button</span> <span class="attr">type</span>=<span class="str">"submit"</span><span class="tag">&gt;</span>Send<span class="tag">&lt;/button&gt;</span>
<span class="tag">&lt;/form&gt;</span>`,
          codeLang: 'HTML',
          tip: '🌟 Pro Tip: Always link &lt;label&gt; to its input using the for and id attributes. This improves accessibility — clicking the label will focus the input field!',
          quiz: [
            { q: 'Which attribute defines WHERE the form data is sent?', opts: ['method', 'action', 'target', 'send'], ans: 1, exp: 'The action attribute specifies the URL/server that handles the form submission. Example: action="/register"' },
            { q: 'Which input type creates a checkbox?', opts: ['type="tick"', 'type="check"', 'type="box"', 'type="checkbox"'], ans: 3, exp: '&lt;input type="checkbox"&gt; creates a toggleable checkbox. Perfect for yes/no choices or multi-select options.' },
            { q: 'Which element creates a dropdown selection menu?', opts: ['&lt;dropdown&gt;', '&lt;menu&gt;', '&lt;select&gt;', '&lt;options&gt;'], ans: 2, exp: '&lt;select&gt; creates a dropdown menu. It contains &lt;option&gt; elements for each choice.' },
            { q: 'Which attribute makes a form field mandatory?', opts: ['mandatory', 'must-fill', 'required', 'needed'], ans: 2, exp: 'The required attribute makes an input field mandatory. The form will not submit unless the required field is filled.' }
          ]
        },
        {
          id: 'html-semantic', title: 'Semantic HTML', icon: '🏗️', xp: 15,
          intro: 'Semantic HTML uses meaningful tags that describe their content\'s purpose, not just appearance. These tags help browsers, search engines, and assistive technologies understand your page structure.',
          concepts: [
            '&lt;header&gt; — Page or section header with logo/nav',
            '&lt;nav&gt; — Navigation links/menus',
            '&lt;main&gt; — Primary content (one per page)',
            '&lt;article&gt; — Self-contained content (blog post, card)',
            '&lt;section&gt; — Thematic grouping of content',
            '&lt;aside&gt; — Sidebar / supplementary content',
            '&lt;footer&gt; — Page or section footer'
          ],
          code: `<span class="tag">&lt;body&gt;</span>
  <span class="tag">&lt;header&gt;</span>
    <span class="tag">&lt;nav&gt;</span>
      <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="str">"/"</span><span class="tag">&gt;</span>Home<span class="tag">&lt;/a&gt;</span>
      <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="str">"/about"</span><span class="tag">&gt;</span>About<span class="tag">&lt;/a&gt;</span>
    <span class="tag">&lt;/nav&gt;</span>
  <span class="tag">&lt;/header&gt;</span>

  <span class="tag">&lt;main&gt;</span>
    <span class="tag">&lt;article&gt;</span>
      <span class="tag">&lt;h1&gt;</span>Blog Post Title<span class="tag">&lt;/h1&gt;</span>
      <span class="tag">&lt;p&gt;</span>Content here...<span class="tag">&lt;/p&gt;</span>
    <span class="tag">&lt;/article&gt;</span>
    <span class="tag">&lt;aside&gt;</span>Related links<span class="tag">&lt;/aside&gt;</span>
  <span class="tag">&lt;/main&gt;</span>

  <span class="tag">&lt;footer&gt;</span>© 2025 My Website<span class="tag">&lt;/footer&gt;</span>
<span class="tag">&lt;/body&gt;</span>`,
          codeLang: 'HTML',
          tip: '🌟 Pro Tip: Using semantic HTML instead of &lt;div&gt; everywhere improves accessibility, SEO, and code readability. It also makes your CSS easier to write with clear, meaningful selectors!',
          quiz: [
            { q: 'Which tag represents the MAIN content area of a page?', opts: ['&lt;content&gt;', '&lt;body&gt;', '&lt;main&gt;', '&lt;primary&gt;'], ans: 2, exp: '&lt;main&gt; contains the dominant content of the &lt;body&gt;. There should only be one &lt;main&gt; per page.' },
            { q: 'Which tag wraps navigation links?', opts: ['&lt;menu&gt;', '&lt;links&gt;', '&lt;navbar&gt;', '&lt;nav&gt;'], ans: 3, exp: '&lt;nav&gt; is the semantic element for navigation links (site menus, breadcrumbs, etc.).' },
            { q: 'Which tag is used for the page footer?', opts: ['&lt;bottom&gt;', '&lt;foot&gt;', '&lt;footer&gt;', '&lt;end&gt;'], ans: 2, exp: '&lt;footer&gt; contains footer content like copyright info, contact links, and site maps.' },
            { q: 'Which tag best represents a self-contained blog post?', opts: ['&lt;post&gt;', '&lt;blog&gt;', '&lt;section&gt;', '&lt;article&gt;'], ans: 3, exp: '&lt;article&gt; represents a self-contained composition that can be independently distributed — perfect for blog posts, news articles, or product cards.' }
          ]
        }
      ],
      challenges: [
        { id: 'html-c1', title: 'Build a Profile Card', icon: '👤', xp: 50,
          desc: 'Create an HTML structure for a developer profile card using proper semantic elements.',
          reqs: ['A profile image with alt text', 'Name as an h2 heading', 'Job title in a paragraph', 'An unordered list of 3 skills', 'A link to GitHub/LinkedIn'],
          hints: ['Start with a &lt;div class="card"&gt; container', 'Use &lt;img&gt; for the photo with descriptive alt text', 'Nest all text content logically under the image'],
          solution: `&lt;div class="card"&gt;
  &lt;img src="profile.jpg" alt="Developer smiling at camera"&gt;
  &lt;h2&gt;Taiba Shabbir&lt;/h2&gt;
  &lt;p&gt;Frontend Developer&lt;/p&gt;
  &lt;ul&gt;
    &lt;li&gt;HTML &amp; CSS&lt;/li&gt;
    &lt;li&gt;JavaScript&lt;/li&gt;
    &lt;li&gt;React&lt;/li&gt;
  &lt;/ul&gt;
  &lt;a href="https://github.com"&gt;GitHub Profile&lt;/a&gt;
&lt;/div&gt;`},
        { id: 'html-c2', title: 'Create a Contact Form', icon: '📬', xp: 50,
          desc: 'Build a complete HTML contact form with proper labels, input types, and a submit button.',
          reqs: ['Text input for full name (required)', 'Email input (required)', 'Dropdown for subject topic', 'Textarea for message', 'Submit button'],
          hints: ['Use &lt;form action="#" method="post"&gt;', 'Link each &lt;label&gt; to its input using for/id', 'Use appropriate input types (text, email, etc.)'],
          solution: `&lt;form action="#" method="post"&gt;
  &lt;label for="name"&gt;Full Name&lt;/label&gt;
  &lt;input type="text" id="name" name="name" required&gt;

  &lt;label for="email"&gt;Email&lt;/label&gt;
  &lt;input type="email" id="email" name="email" required&gt;

  &lt;label for="subject"&gt;Subject&lt;/label&gt;
  &lt;select id="subject" name="subject"&gt;
    &lt;option value="general"&gt;General&lt;/option&gt;
    &lt;option value="support"&gt;Support&lt;/option&gt;
  &lt;/select&gt;

  &lt;label for="msg"&gt;Message&lt;/label&gt;
  &lt;textarea id="msg" name="msg" rows="5"&gt;&lt;/textarea&gt;

  &lt;button type="submit"&gt;Send Message&lt;/button&gt;
&lt;/form&gt;`},
        { id: 'html-c3', title: 'Semantic Webpage Structure', icon: '🏗️', xp: 60,
          desc: 'Build a full page skeleton using only semantic HTML5 elements — no div soup!',
          reqs: ['&lt;header&gt; with nav links', '&lt;main&gt; with an &lt;article&gt;', 'An &lt;aside&gt; for sidebar', '&lt;footer&gt; with copyright', 'At least one &lt;section&gt;'],
          hints: ['Think of a real webpage layout: header → main → footer', 'Inside main, use article for the content and aside for a sidebar', 'Use &lt;section&gt; inside article to group content'],
          solution: `&lt;header&gt;
  &lt;nav&gt;
    &lt;a href="/"&gt;Home&lt;/a&gt;
    &lt;a href="/about"&gt;About&lt;/a&gt;
    &lt;a href="/contact"&gt;Contact&lt;/a&gt;
  &lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
  &lt;article&gt;
    &lt;h1&gt;Article Title&lt;/h1&gt;
    &lt;section&gt;&lt;p&gt;Section content...&lt;/p&gt;&lt;/section&gt;
  &lt;/article&gt;
  &lt;aside&gt;&lt;p&gt;Related links...&lt;/p&gt;&lt;/aside&gt;
&lt;/main&gt;
&lt;footer&gt;&lt;p&gt;© 2025 My Site&lt;/p&gt;&lt;/footer&gt;`}
      ]
    },

    /* ═══════════════════ CSS KINGDOM ════════════════════ */
    css: {
      id: 'css', name: 'CSS Kingdom', icon: '🎨',
      color: '#00CEC9', page: 'css.html',
      description: 'Style and beautify the web with CSS magic',
      lessons: [
        {
          id: 'css-colors', title: 'Colors', icon: '🌈', xp: 10,
          intro: 'CSS gives you powerful ways to add color to your webpages. You can use named colors, hex codes, RGB, RGBA, HSL, or gradients. Understanding colors is fundamental to great web design.',
          concepts: [
            'color: sets text color. background-color: sets background',
            'Named colors: red, gold, coral, teal (147 named colors)',
            'Hex: #RRGGBB or #RGB shorthand. Example: #FFD700',
            'RGB: rgb(255, 215, 0) or rgba(255,215,0,0.5) for transparency',
            'HSL: hsl(hue, saturation%, lightness%) — intuitive for adjustments'
          ],
          code: `<span class="kw">p</span> {
  <span class="attr">color</span>: <span class="val">#333333</span>;           <span class="cm">/* hex color */</span>
  <span class="attr">background-color</span>: <span class="val">gold</span>;  <span class="cm">/* named color */</span>
}

<span class="kw">.highlight</span> {
  <span class="attr">color</span>: <span class="fn">rgb</span>(<span class="num">255</span>, <span class="num">215</span>, <span class="num">0</span>);
  <span class="attr">background</span>: <span class="fn">rgba</span>(<span class="num">0</span>, <span class="num">0</span>, <span class="num">0</span>, <span class="num">0.7</span>); <span class="cm">/* 70% opacity */</span>
}

<span class="kw">.gradient-bg</span> {
  <span class="attr">background</span>: <span class="fn">linear-gradient</span>(<span class="val">135deg</span>, <span class="val">#FFD700</span>, <span class="val">#FF6B35</span>);
}`,
          codeLang: 'CSS',
          tip: '🌟 Pro Tip: Use CSS Custom Properties (variables) for colors: --gold: #FFD700; then use color: var(--gold). This makes theme changes instant across your whole site!',
          quiz: [
            { q: 'Which CSS property changes the TEXT color?', opts: ['background-color', 'font-color', 'text-color', 'color'], ans: 3, exp: 'The color property sets the foreground (text) color. background-color sets the background.' },
            { q: 'What does the "A" in RGBA stand for?', opts: ['Arrangement', 'Alpha (opacity)', 'Amount', 'Adjustment'], ans: 1, exp: 'RGBA = Red, Green, Blue, Alpha. Alpha controls transparency (0 = fully transparent, 1 = fully opaque).' },
            { q: 'Which CSS value creates a gradient background?', opts: ['background: gradient()', 'background: linear-gradient()', 'color: gradient()', 'bg: linear()'], ans: 1, exp: 'linear-gradient() creates a gradient. Example: background: linear-gradient(to right, red, blue);' },
            { q: 'Which format is #FFD700?', opts: ['RGB value', 'Named color', 'Hex color code', 'HSL value'], ans: 2, exp: '#FFD700 is a hexadecimal (hex) color code. FF=Red, D7=Green, 00=Blue — this is the color gold!' }
          ]
        },
        {
          id: 'css-fonts', title: 'Fonts & Typography', icon: '🔤', xp: 10,
          intro: 'Typography is one of the most powerful tools in web design. CSS gives you full control over fonts, sizes, weights, spacing, and alignment. Well-chosen typography makes content readable and beautiful.',
          concepts: [
            'font-family: sets the typeface. Always include fallbacks',
            'font-size: px (fixed), em (relative to parent), rem (relative to root)',
            'font-weight: 100–900 or keywords (normal=400, bold=700)',
            'line-height: spacing between lines — 1.5–1.8 is ideal for body text',
            'Google Fonts: free web fonts via @import or &lt;link&gt; tag'
          ],
          code: `<span class="cm">/* Import Google Font */</span>
<span class="kw">@import</span> <span class="fn">url</span>(<span class="str">'https://fonts.googleapis.com/css2?family=Orbitron'</span>);

<span class="kw">body</span> {
  <span class="attr">font-family</span>: <span class="str">'Nunito'</span>, <span class="val">sans-serif</span>;
  <span class="attr">font-size</span>: <span class="num">16px</span>;
  <span class="attr">line-height</span>: <span class="num">1.6</span>;
  <span class="attr">color</span>: <span class="val">#333</span>;
}

<span class="kw">h1</span> {
  <span class="attr">font-family</span>: <span class="str">'Orbitron'</span>, <span class="val">monospace</span>;
  <span class="attr">font-size</span>: <span class="num">2.5rem</span>;
  <span class="attr">font-weight</span>: <span class="num">900</span>;
  <span class="attr">letter-spacing</span>: <span class="num">0.05em</span>;
}`,
          codeLang: 'CSS',
          tip: '🌟 Pro Tip: Use rem for font sizes instead of px. 1rem = 16px by default, but if a user changes their browser font size, rem-based text scales correctly — making your site more accessible!',
          quiz: [
            { q: 'Which CSS property sets the font typeface?', opts: ['text-type', 'typeface', 'font-family', 'font-face'], ans: 2, exp: 'font-family sets the typeface. Always provide fallback fonts: font-family: "Roboto", Arial, sans-serif;' },
            { q: 'Which unit is RELATIVE to the root element font size?', opts: ['px', 'em', 'pt', 'rem'], ans: 3, exp: 'rem (root em) is relative to the &lt;html&gt; element font size. 1rem = 16px by default. Great for accessible typography.' },
            { q: 'What font-weight value is equivalent to "bold"?', opts: ['600', '700', '800', '500'], ans: 1, exp: 'font-weight: 700 is equivalent to bold. The scale runs from 100 (thin) to 900 (black/ultra-bold).' },
            { q: 'Which property controls spacing between lines of text?', opts: ['letter-spacing', 'word-spacing', 'line-height', 'text-spacing'], ans: 2, exp: 'line-height sets the vertical spacing between lines. A value of 1.5–1.8 is recommended for body text readability.' }
          ]
        },
        {
          id: 'css-boxmodel', title: 'Box Model', icon: '📦', xp: 10,
          intro: 'Every HTML element is a box. The CSS Box Model describes how space is calculated around content: content → padding → border → margin. Understanding this is key to mastering CSS layouts.',
          concepts: [
            'Content: the actual text/image area (width × height)',
            'Padding: space INSIDE the border between content and border',
            'Border: the outline around the element',
            'Margin: space OUTSIDE the border (between elements)',
            'box-sizing: border-box makes width include padding+border (recommended)'
          ],
          code: `<span class="kw">.box</span> {
  <span class="cm">/* Content size */</span>
  <span class="attr">width</span>: <span class="num">300px</span>;
  <span class="attr">height</span>: <span class="num">200px</span>;

  <span class="cm">/* Padding (inner space) */</span>
  <span class="attr">padding</span>: <span class="num">20px</span>;         <span class="cm">/* all sides */</span>
  <span class="attr">padding</span>: <span class="num">10px 20px</span>;   <span class="cm">/* top/bottom left/right */</span>

  <span class="cm">/* Border */</span>
  <span class="attr">border</span>: <span class="num">2px</span> <span class="val">solid</span> <span class="val">#FFD700</span>;
  <span class="attr">border-radius</span>: <span class="num">12px</span>;

  <span class="cm">/* Margin (outer space) */</span>
  <span class="attr">margin</span>: <span class="num">16px auto</span>;    <span class="cm">/* center horizontally */</span>

  <span class="cm">/* Recommended! */</span>
  <span class="attr">box-sizing</span>: <span class="val">border-box</span>;
}`,
          codeLang: 'CSS',
          tip: '🌟 Pro Tip: Add box-sizing: border-box to * { } at the top of your CSS. This makes every element\'s width include padding and border, which makes sizing layouts much more predictable!',
          quiz: [
            { q: 'From inside to outside, what is the correct Box Model order?', opts: ['margin → border → padding → content', 'content → padding → border → margin', 'padding → content → margin → border', 'border → margin → padding → content'], ans: 1, exp: 'Content (innermost) → Padding → Border → Margin (outermost). Think of it like packaging: product→ padding foam → box → shelf space.' },
            { q: 'Which property adds space INSIDE the border?', opts: ['margin', 'spacing', 'padding', 'gap'], ans: 2, exp: 'padding creates space between the content and the border — inside the element.' },
            { q: 'Which property adds space OUTSIDE the border?', opts: ['padding', 'gap', 'border-spacing', 'margin'], ans: 3, exp: 'margin creates space outside the element — between it and neighboring elements.' },
            { q: 'What does box-sizing: border-box do?', opts: ['Adds a border around the box', 'Makes width include padding+border', 'Removes the box model', 'Sets border to none'], ans: 1, exp: 'border-box makes the element\'s width/height include padding and border — so a width:300px box stays 300px wide even with padding added.' }
          ]
        },
        {
          id: 'css-flexbox', title: 'Flexbox', icon: '↔️', xp: 15,
          intro: 'Flexbox (Flexible Box Layout) is a CSS layout model that makes arranging items in a row or column effortless. It\'s perfect for navigation bars, card grids, centered content, and more.',
          concepts: [
            'display: flex — activates flexbox on a container',
            'flex-direction: row (default) | column | row-reverse | column-reverse',
            'justify-content: aligns items on MAIN axis (row → horizontal)',
            'align-items: aligns items on CROSS axis (row → vertical)',
            'flex-wrap: wrap allows items to wrap to next line'
          ],
          code: `<span class="kw">.container</span> {
  <span class="attr">display</span>: <span class="val">flex</span>;
  <span class="attr">flex-direction</span>: <span class="val">row</span>;
  <span class="attr">justify-content</span>: <span class="val">space-between</span>;
  <span class="attr">align-items</span>: <span class="val">center</span>;
  <span class="attr">gap</span>: <span class="num">16px</span>;
  <span class="attr">flex-wrap</span>: <span class="val">wrap</span>;
}

<span class="cm">/* Center anything — the holy grail! */</span>
<span class="kw">.centered</span> {
  <span class="attr">display</span>: <span class="val">flex</span>;
  <span class="attr">justify-content</span>: <span class="val">center</span>;
  <span class="attr">align-items</span>: <span class="val">center</span>;
}`,
          codeLang: 'CSS',
          tip: '🌟 Pro Tip: justify-content: space-between puts max space between items. space-around adds equal space around each item. space-evenly distributes all space evenly including the ends.',
          quiz: [
            { q: 'Which CSS value activates Flexbox on a container?', opts: ['display: block', 'display: grid', 'display: flex', 'display: inline'], ans: 2, exp: 'display: flex turns an element into a flex container, making all its direct children flex items.' },
            { q: 'Which property aligns flex items on the MAIN axis?', opts: ['align-items', 'align-content', 'flex-align', 'justify-content'], ans: 3, exp: 'justify-content aligns items along the main axis (horizontal by default). Values: flex-start, center, space-between, etc.' },
            { q: 'Which property allows flex items to wrap onto the next line?', opts: ['flex-overflow: wrap', 'flex-wrap: wrap', 'overflow: wrap', 'flex: wrap'], ans: 1, exp: 'flex-wrap: wrap allows items to wrap to the next line when they exceed the container width. Default is nowrap.' },
            { q: 'To center an element both horizontally and vertically with flexbox, you need:', opts: ['justify: center; align: center', 'flex: center center', 'justify-content: center + align-items: center', 'text-align: center only'], ans: 2, exp: 'Combine justify-content: center (horizontal) and align-items: center (vertical) on the flex container for perfect centering.' }
          ]
        },
        {
          id: 'css-grid', title: 'CSS Grid', icon: '⊞', xp: 15,
          intro: 'CSS Grid is the most powerful layout system in CSS. It works in two dimensions (rows AND columns simultaneously), making it ideal for complex page layouts, galleries, and dashboard designs.',
          concepts: [
            'display: grid — activates grid layout',
            'grid-template-columns: 1fr 1fr 1fr — creates 3 equal columns',
            'repeat(3, 1fr) — shorthand for repeated track sizes',
            'gap: sets spacing between rows and columns',
            'grid-column: span 2 — makes an item span 2 columns'
          ],
          code: `<span class="kw">.grid</span> {
  <span class="attr">display</span>: <span class="val">grid</span>;
  <span class="attr">grid-template-columns</span>: <span class="fn">repeat</span>(<span class="num">3</span>, <span class="num">1fr</span>);
  <span class="attr">grid-template-rows</span>: <span class="val">auto</span>;
  <span class="attr">gap</span>: <span class="num">20px</span>;
}

<span class="cm">/* Responsive grid */</span>
<span class="kw">.auto-grid</span> {
  <span class="attr">display</span>: <span class="val">grid</span>;
  <span class="attr">grid-template-columns</span>: <span class="fn">repeat</span>(<span class="fn">auto-fill</span>, <span class="fn">minmax</span>(<span class="num">200px</span>, <span class="num">1fr</span>));
  <span class="attr">gap</span>: <span class="num">16px</span>;
}

<span class="kw">.wide-item</span> {
  <span class="attr">grid-column</span>: <span class="val">span</span> <span class="num">2</span>;
}`,
          codeLang: 'CSS',
          tip: '🌟 Pro Tip: grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) creates a fully responsive grid with NO media queries needed — it automatically adjusts column count based on screen width!',
          quiz: [
            { q: 'Which CSS value creates a grid layout?', opts: ['display: grid-layout', 'display: flex-grid', 'display: block-grid', 'display: grid'], ans: 3, exp: 'display: grid turns an element into a grid container, enabling two-dimensional layout control.' },
            { q: 'What does "1fr" mean in CSS Grid?', opts: ['1 pixel fraction', '1 free column', '1 fractional unit of available space', '1 fixed row'], ans: 2, exp: 'fr (fraction) represents a fraction of the available space. 1fr 1fr 1fr = 3 equal columns, each getting 1/3 of the space.' },
            { q: 'Which shorthand creates 3 equal columns in CSS Grid?', opts: ['columns: 3', 'grid: 3 equal', 'grid-template-columns: repeat(3, 1fr)', 'columns: repeat(1fr, 3)'], ans: 2, exp: 'grid-template-columns: repeat(3, 1fr) creates three equal columns. repeat(count, size) is shorthand for listing the same size multiple times.' },
            { q: 'Which property sets the gap between grid rows and columns?', opts: ['spacing', 'grid-spacing', 'padding', 'gap'], ans: 3, exp: 'The gap property sets the spacing between grid rows and columns. It\'s shorthand for row-gap and column-gap.' }
          ]
        },
        {
          id: 'css-animations', title: 'Animations', icon: '✨', xp: 15,
          intro: 'CSS animations bring your designs to life! You can create smooth transitions between states and complex multi-step animations using @keyframes — all without JavaScript.',
          concepts: [
            'transition: smoothly changes property values over time',
            '@keyframes defines the animation steps (from/to or percentages)',
            'animation: name duration timing-function delay iteration-count direction',
            'transform: translate(), scale(), rotate(), skew() for visual transformations',
            'animation-fill-mode: forwards keeps the end state after animation'
          ],
          code: `<span class="cm">/* Smooth hover transition */</span>
<span class="kw">.btn</span> {
  <span class="attr">transition</span>: <span class="val">all</span> <span class="num">0.3s</span> <span class="fn">ease</span>;
}
<span class="kw">.btn:hover</span> {
  <span class="attr">transform</span>: <span class="fn">translateY</span>(<span class="num">-4px</span>);
  <span class="attr">box-shadow</span>: <span class="num">0 8px 20px</span> <span class="fn">rgba</span>(<span class="num">0,0,0,0.3</span>);
}

<span class="cm">/* Keyframe animation */</span>
<span class="kw">@keyframes</span> fadeIn {
  <span class="val">from</span> { <span class="attr">opacity</span>: <span class="num">0</span>; <span class="attr">transform</span>: <span class="fn">translateY</span>(<span class="num">20px</span>); }
  <span class="val">to</span>   { <span class="attr">opacity</span>: <span class="num">1</span>; <span class="attr">transform</span>: <span class="fn">translateY</span>(<span class="num">0</span>); }
}
<span class="kw">.animated</span> {
  <span class="attr">animation</span>: <span class="val">fadeIn</span> <span class="num">0.6s</span> <span class="fn">ease</span> <span class="val">forwards</span>;
}`,
          codeLang: 'CSS',
          tip: '🌟 Pro Tip: Use will-change: transform on elements you plan to animate. It hints to the browser to optimize rendering. Also keep animations to transform and opacity properties for the best performance (GPU-accelerated)!',
          quiz: [
            { q: 'Which CSS property creates a smooth visual change on state transition?', opts: ['animation', 'transform', 'transition', 'effect'], ans: 2, exp: 'transition smoothly animates property changes (like on hover). Example: transition: all 0.3s ease;' },
            { q: 'Which CSS rule defines the keyframes of an animation?', opts: ['@animation', '@motion', '@frames', '@keyframes'], ans: 3, exp: '@keyframes defines the animation\'s steps. You name it, then reference that name in the animation property.' },
            { q: 'Which transform function moves an element without changing flow?', opts: ['move()', 'position()', 'translate()', 'offset()'], ans: 2, exp: 'translate() moves an element (translateX, translateY, or translate(x,y)) without affecting the document flow.' },
            { q: 'What animation-fill-mode value keeps the final animation state?', opts: ['both', 'backwards', 'final', 'forwards'], ans: 3, exp: 'animation-fill-mode: forwards keeps the element at the final keyframe values after the animation ends.' }
          ]
        },
        {
          id: 'css-responsive', title: 'Responsive Design', icon: '📱', xp: 15,
          intro: 'Responsive design ensures your website looks great on all screen sizes — from phones to ultrawide monitors. CSS Media Queries are the primary tool, combined with flexible units and layouts.',
          concepts: [
            '@media (max-width: 768px) { } — styles only for screens ≤768px wide',
            'Viewport meta tag: &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;',
            'Mobile-first: write base styles for mobile, then expand for larger screens',
            'Relative units: %, vw, vh, em, rem respond to container/screen size',
            'clamp(min, preferred, max) — fluid typography without media queries'
          ],
          code: `<span class="cm">/* Mobile first: base styles */</span>
<span class="kw">.container</span> {
  <span class="attr">display</span>: <span class="val">grid</span>;
  <span class="attr">grid-template-columns</span>: <span class="num">1fr</span>; <span class="cm">/* 1 column on mobile */</span>
  <span class="attr">gap</span>: <span class="num">16px</span>;
  <span class="attr">padding</span>: <span class="num">0 16px</span>;
}

<span class="cm">/* Tablet */</span>
<span class="kw">@media</span> (<span class="attr">min-width</span>: <span class="num">768px</span>) {
  <span class="kw">.container</span> { <span class="attr">grid-template-columns</span>: <span class="fn">repeat</span>(<span class="num">2</span>, <span class="num">1fr</span>); }
}

<span class="cm">/* Desktop */</span>
<span class="kw">@media</span> (<span class="attr">min-width</span>: <span class="num">1024px</span>) {
  <span class="kw">.container</span> { <span class="attr">grid-template-columns</span>: <span class="fn">repeat</span>(<span class="num">3</span>, <span class="num">1fr</span>); }
}

<span class="cm">/* Fluid font size */</span>
<span class="kw">h1</span> { <span class="attr">font-size</span>: <span class="fn">clamp</span>(<span class="num">1.5rem</span>, <span class="num">4vw</span>, <span class="num">3rem</span>); }`,
          codeLang: 'CSS',
          tip: '🌟 Pro Tip: Always add the viewport meta tag to every HTML page: &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt; — without it, mobile devices won\'t render your responsive styles correctly!',
          quiz: [
            { q: 'Which CSS feature applies styles based on screen size?', opts: ['@import', '@supports', '@media', '@screen'], ans: 2, exp: '@media (media queries) apply CSS rules only when certain conditions are true (e.g., screen width, orientation).' },
            { q: 'What does "mobile-first" design mean?', opts: ['App-only design', 'Start with mobile CSS, add more for larger screens', 'Start with desktop, then shrink', 'Only works on iOS'], ans: 1, exp: 'Mobile-first means writing base styles for the smallest screens, then using min-width media queries to progressively enhance for larger screens.' },
            { q: 'Which meta tag is required for responsive design to work on mobile?', opts: ['meta charset', 'meta author', 'meta viewport', 'meta responsive'], ans: 2, exp: '&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt; tells mobile browsers to use the device width rather than a virtual desktop width.' },
            { q: 'Which CSS unit is relative to the viewport width?', opts: ['em', 'rem', 'vw', 'px'], ans: 2, exp: 'vw (viewport width) — 1vw = 1% of the viewport width. 100vw = full viewport width. Great for full-width sections.' }
          ]
        }
      ],
      challenges: [
        { id: 'css-c1', title: 'Style a Profile Card', icon: '💅', xp: 50, desc: 'Take the HTML profile card and make it beautiful with CSS — use the box model, colors, and fonts.', reqs: ['Glassmorphism background effect', 'Rounded corners and shadow', 'Gold accent color for name', 'Smooth hover scale effect', 'Custom bullet list styling'], hints: ['Use border-radius for rounded corners', 'box-shadow: 0 20px 60px rgba(0,0,0,0.3)', 'Try backdrop-filter: blur(10px) for glassmorphism'], solution: `.card {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,215,0,0.2);
  border-radius: 20px;
  padding: 32px;
  text-align: center;
  transition: transform 0.3s ease;
}
.card:hover { transform: translateY(-8px); }
.card h2 { color: #FFD700; font-size: 1.5rem; }
.card img { width: 100px; border-radius: 50%; border: 3px solid gold; }`},
        { id: 'css-c2', title: 'Responsive Layout', icon: '📐', xp: 50, desc: 'Create a 3-column card grid that collapses to 1 column on mobile using CSS Grid and Media Queries.', reqs: ['3 columns on desktop (>900px)', '2 columns on tablet (600–900px)', '1 column on mobile (<600px)', 'Cards with equal height', 'Gap between cards'], hints: ['Use display: grid with grid-template-columns', 'Use @media (max-width: 900px) for tablet breakpoint', 'gap property for spacing'], solution: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media (max-width: 900px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr; }
}`},
        { id: 'css-c3', title: 'Animated Hero Section', icon: '🌟', xp: 60, desc: 'Build a CSS-only animated landing page hero with a gradient background and floating text animation.', reqs: ['Animated gradient background', 'Fade-in headline animation', 'Glowing button with hover effect', 'Floating/pulse animation on a badge', 'Full viewport height section'], hints: ['Use @keyframes for gradient animation via background-position', 'Use animation: fadeIn 1s ease forwards', 'Use :hover with transform and box-shadow'], solution: `@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.hero {
  background: linear-gradient(-45deg, #080810, #1a1a35, #0d2537, #111122);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}`}
      ]
    },

    /* ════════════════ JAVASCRIPT KINGDOM ════════════════ */
    javascript: {
      id: 'javascript', name: 'JavaScript Kingdom', icon: '⚡',
      color: '#FDCB6E', page: 'javascript.html',
      description: 'Add interactivity and logic to your websites',
      lessons: [
        { id: 'js-variables', title: 'Variables', icon: '📦', xp: 10,
          intro: 'Variables store data in your programs. JavaScript has three ways to declare variables: var (old), let (modern, can change), and const (modern, cannot be reassigned). Always prefer const, use let when the value needs to change.',
          concepts: ['const: block-scoped, cannot be reassigned (use for most things)', 'let: block-scoped, can be reassigned (use for counters, states)', 'var: function-scoped (avoid in modern JS)', 'Variable names: camelCase, start with letter/$/_', 'typeof operator: check what type a value is'],
          code: `<span class="cm">// Declare variables</span>
<span class="kw">const</span> playerName = <span class="str">"Taiba"</span>;   <span class="cm">// string</span>
<span class="kw">const</span> score = <span class="num">100</span>;             <span class="cm">// number</span>
<span class="kw">const</span> isPlaying = <span class="val">true</span>;       <span class="cm">// boolean</span>

<span class="kw">let</span> currentLevel = <span class="num">1</span>;
currentLevel = <span class="num">2</span>;             <span class="cm">// can reassign</span>

<span class="cm">// Check type</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="kw">typeof</span> score);    <span class="cm">// "number"</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="kw">typeof</span> playerName); <span class="cm">// "string"</span>`,
          codeLang: 'JavaScript', tip: '🌟 Pro Tip: Always use const by default. Only switch to let if you know you\'ll reassign the value. This prevents accidental reassignment bugs and makes your code easier to reason about.',
          quiz: [
            { q: 'Which keyword declares a variable that CANNOT be reassigned?', opts: ['var', 'let', 'const', 'static'], ans: 2, exp: 'const declares a constant — a variable that cannot be reassigned. Use it for values that never change.' },
            { q: 'Which keyword declares a variable that CAN be reassigned?', opts: ['const', 'var', 'final', 'let'], ans: 3, exp: 'let declares a block-scoped variable that can be reassigned. Use it when the value needs to change (counters, state).' },
            { q: 'What naming convention is standard for JavaScript variables?', opts: ['snake_case', 'PascalCase', 'UPPER_CASE', 'camelCase'], ans: 3, exp: 'camelCase is the standard for JS variables and functions. Example: playerScore, firstName, isGameOver.' },
            { q: 'What does the typeof operator return for the value 42?', opts: ['"integer"', '"int"', '"42"', '"number"'], ans: 3, exp: 'typeof 42 returns "number". JavaScript uses "number" for all numeric values (integers and floats).' }
          ]
        },
        { id: 'js-functions', title: 'Functions', icon: '⚙️', xp: 10,
          intro: 'Functions are reusable blocks of code that perform a specific task. They take inputs (parameters), process them, and return outputs. Functions are the building blocks of any program — master them and you can build anything.',
          concepts: ['function declaration: function name(params) { return value; }', 'Arrow function: const name = (params) => value;', 'Parameters are inputs, return sends output back', 'Default parameters: function greet(name = "World") {}', 'Functions are first-class: pass them, store them, return them'],
          code: `<span class="cm">// Function declaration</span>
<span class="kw">function</span> <span class="fn">add</span>(a, b) {
  <span class="kw">return</span> a + b;
}

<span class="cm">// Arrow function (modern)</span>
<span class="kw">const</span> <span class="fn">multiply</span> = (a, b) => a * b;

<span class="cm">// Default parameter</span>
<span class="kw">const</span> <span class="fn">greet</span> = (name = <span class="str">"Coder"</span>) => {
  <span class="kw">return</span> <span class="str">\`Hello, \${name}!\`</span>;
};

<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>));       <span class="cm">// 8</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">greet</span>(<span class="str">"Taiba"</span>)); <span class="cm">// Hello, Taiba!</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">greet</span>());       <span class="cm">// Hello, Coder!</span>`,
          codeLang: 'JavaScript', tip: '🌟 Pro Tip: Arrow functions with a single expression don\'t need curly braces or return: const double = x => x * 2; is the same as function double(x) { return x * 2; }',
          quiz: [
            { q: 'Which keyword is used to send a value back from a function?', opts: ['send', 'output', 'give', 'return'], ans: 3, exp: 'return sends a value back to wherever the function was called from. After return, the function stops.' },
            { q: 'What is the arrow function syntax for: function add(a,b){ return a+b; }', opts: ['add = (a,b) -> a+b', 'const add = (a,b) => a+b', 'const add = (a,b): a+b', 'function add = (a,b)=> a+b'], ans: 1, exp: 'const add = (a,b) => a+b; is the arrow function equivalent. No curly braces or return needed for single expressions.' },
            { q: 'What are the VALUES passed INTO a function called?', opts: ['Returns', 'Outputs', 'Arguments / Parameters', 'Variables'], ans: 2, exp: 'Parameters are placeholders defined in the function. Arguments are the actual values passed when calling the function.' },
            { q: 'What does a "default parameter" do?', opts: ['Makes parameter required', 'Sets a value if no argument is given', 'Returns the parameter', 'Declares a global variable'], ans: 1, exp: 'Default parameters provide a fallback value when no argument is passed. Example: function greet(name = "World") uses "World" if name is not provided.' }
          ]
        },
        { id: 'js-conditions', title: 'Conditions', icon: '🔀', xp: 10,
          intro: 'Conditions let your code make decisions based on whether something is true or false. JavaScript uses if/else statements, switch statements, and the compact ternary operator for conditional logic.',
          concepts: ['if (condition) {} else if {} else {} — basic branching', 'Comparison: === (strict equal), !== (not equal), >, <, >=, <=', 'Logical: && (AND), || (OR), ! (NOT)', 'switch: best for multiple discrete value checks', 'Ternary: condition ? valueIfTrue : valueIfFalse'],
          code: `<span class="kw">const</span> score = <span class="num">85</span>;

<span class="cm">// if / else if / else</span>
<span class="kw">if</span> (score >= <span class="num">90</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Grade: A"</span>);
} <span class="kw">else if</span> (score >= <span class="num">70</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Grade: B"</span>);
} <span class="kw">else</span> {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Grade: C"</span>);
}

<span class="cm">// Ternary (compact)</span>
<span class="kw">const</span> pass = score >= <span class="num">50</span> ? <span class="str">"Pass"</span> : <span class="str">"Fail"</span>;
<span class="fn">console</span>.<span class="fn">log</span>(pass); <span class="cm">// "Pass"</span>`,
          codeLang: 'JavaScript', tip: '🌟 Pro Tip: Use === (triple equals) instead of == (double equals) in JavaScript. === checks both value AND type, preventing subtle bugs. "5" == 5 is true, but "5" === 5 is false.',
          quiz: [
            { q: 'Which operator checks if two values are STRICTLY equal (type + value)?', opts: ['==', '=', '===', '!='], ans: 2, exp: '=== (strict equality) checks both value AND type. Use this instead of == which does type coercion.' },
            { q: 'Which logical operator means AND?', opts: ['||', '!', '&&', '&'], ans: 2, exp: '&& is the AND operator. Both conditions must be true: if (a > 0 && b > 0) — both a and b must be positive.' },
            { q: 'What is the ternary operator syntax?', opts: ['if(cond) ? val1 : val2', 'cond ? val1 : val2', 'cond : val1 ? val2', 'cond -> val1 :: val2'], ans: 1, exp: 'condition ? valueIfTrue : valueIfFalse. It\'s a compact one-line alternative to if/else for simple cases.' },
            { q: 'Which statement is best for checking MULTIPLE specific values of one variable?', opts: ['if/else chain', 'switch', 'for loop', 'while loop'], ans: 1, exp: 'switch checks a variable against multiple cases. Cleaner than a long if/else chain when checking many specific values.' }
          ]
        },
        { id: 'js-loops', title: 'Loops', icon: '🔄', xp: 10,
          intro: 'Loops repeat code multiple times. Instead of writing the same code 100 times, you write it once inside a loop. JavaScript has for loops, while loops, and special array iteration methods.',
          concepts: ['for loop: for (let i = 0; i < count; i++) {}', 'while loop: while (condition) {} — use when count is unknown', 'for...of: iterate over array values', 'for...in: iterate over object keys', 'break: exit loop early. continue: skip current iteration'],
          code: `<span class="cm">// For loop (count 1 to 5)</span>
<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">1</span>; i <= <span class="num">5</span>; i++) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Count:"</span>, i);
}

<span class="cm">// For...of (iterate array)</span>
<span class="kw">const</span> skills = [<span class="str">"HTML"</span>, <span class="str">"CSS"</span>, <span class="str">"JS"</span>];
<span class="kw">for</span> (<span class="kw">const</span> skill <span class="kw">of</span> skills) {
  <span class="fn">console</span>.<span class="fn">log</span>(skill);
}

<span class="cm">// While loop</span>
<span class="kw">let</span> count = <span class="num">0</span>;
<span class="kw">while</span> (count < <span class="num">3</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Loop:"</span>, count);
  count++;
}`,
          codeLang: 'JavaScript', tip: '🌟 Pro Tip: Prefer array methods like .forEach(), .map(), .filter() over for loops when working with arrays — they are more readable and expressive: skills.forEach(skill => console.log(skill))',
          quiz: [
            { q: 'In a for loop "for(let i=0; i<5; i++)", what does i++ do?', opts: ['Sets i to 1', 'Checks the condition', 'Increments i by 1 each iteration', 'Resets i to 0'], ans: 2, exp: 'i++ is the update expression — it increments i by 1 after each loop iteration. Without it, the loop would run forever.' },
            { q: 'Which loop is best when you DON\'T know how many times to repeat?', opts: ['for loop', 'for...of loop', 'while loop', 'for...in loop'], ans: 2, exp: 'while loops run as long as a condition is true — ideal when the iteration count is unknown upfront.' },
            { q: 'Which statement exits a loop immediately?', opts: ['stop', 'return', 'exit', 'break'], ans: 3, exp: 'break immediately exits the loop, skipping any remaining iterations. continue skips just the current iteration.' },
            { q: 'Which loop syntax iterates over VALUES of an array?', opts: ['for (x in arr)', 'for (x of arr)', 'for (x from arr)', 'for arr(x)'], ans: 1, exp: 'for...of iterates over array values. for...in iterates over object keys (avoid it on arrays).' }
          ]
        },
        { id: 'js-arrays', title: 'Arrays', icon: '📚', xp: 10,
          intro: 'Arrays store multiple values in an ordered list. Each item has a numeric index starting at 0. JavaScript arrays come with powerful built-in methods for transforming, filtering, and searching data.',
          concepts: ['Create: const arr = [1, 2, 3] or new Array()', 'Access: arr[0] (first item), arr[arr.length-1] (last)', 'push/pop: add/remove from end. unshift/shift: add/remove from start', 'map: transform each item. filter: select items. find: find one item', 'reduce: combine all items into one value'],
          code: `<span class="kw">const</span> scores = [<span class="num">85</span>, <span class="num">92</span>, <span class="num">78</span>, <span class="num">96</span>];

<span class="fn">console</span>.<span class="fn">log</span>(scores[<span class="num">0</span>]);          <span class="cm">// 85 (first)</span>
<span class="fn">console</span>.<span class="fn">log</span>(scores.<span class="fn">length</span>);      <span class="cm">// 4</span>

scores.<span class="fn">push</span>(<span class="num">100</span>);               <span class="cm">// add to end</span>
<span class="kw">const</span> top = scores.<span class="fn">pop</span>();       <span class="cm">// remove from end</span>

<span class="cm">// Modern array methods</span>
<span class="kw">const</span> passing = scores.<span class="fn">filter</span>(s => s >= <span class="num">80</span>);
<span class="kw">const</span> doubled = scores.<span class="fn">map</span>(s => s * <span class="num">2</span>);
<span class="kw">const</span> total = scores.<span class="fn">reduce</span>((sum, s) => sum + s, <span class="num">0</span>);`,
          codeLang: 'JavaScript', tip: '🌟 Pro Tip: The spread operator (...) makes array copies easy: const copy = [...original]; and merging arrays: const merged = [...arr1, ...arr2]; Never mutate an array directly when you need to keep the original!',
          quiz: [
            { q: 'What index does the FIRST element of an array have?', opts: ['1', '-1', '0', 'first'], ans: 2, exp: 'Arrays in JavaScript (and most languages) are zero-indexed. The first element is at index 0, second at index 1, etc.' },
            { q: 'Which array method adds an element to the END of an array?', opts: ['add()', 'append()', 'push()', 'insert()'], ans: 2, exp: 'push() adds one or more elements to the end of an array and returns the new length.' },
            { q: 'Which array method creates a NEW array with elements that pass a test?', opts: ['find()', 'search()', 'map()', 'filter()'], ans: 3, exp: 'filter() creates a new array with elements that pass the test function. Example: arr.filter(x => x > 5)' },
            { q: 'Which array method transforms each element and returns a NEW array?', opts: ['forEach()', 'change()', 'map()', 'transform()'], ans: 2, exp: 'map() creates a new array by applying a function to each element. Example: arr.map(x => x * 2) doubles each value.' }
          ]
        },
        { id: 'js-dom', title: 'DOM Manipulation', icon: '🌐', xp: 15,
          intro: 'The DOM (Document Object Model) is the live tree representation of your HTML. JavaScript can read and modify the DOM to dynamically change what users see — this is the core of interactive web apps.',
          concepts: ['document.querySelector(".class") — select first matching element', 'document.querySelectorAll(".class") — select ALL matching elements', 'element.textContent — get/set text content', 'element.innerHTML — get/set HTML content', 'element.classList.add/remove/toggle("class")'],
          code: `<span class="cm">// Select elements</span>
<span class="kw">const</span> title = document.<span class="fn">querySelector</span>(<span class="str">"h1"</span>);
<span class="kw">const</span> cards = document.<span class="fn">querySelectorAll</span>(<span class="str">".card"</span>);

<span class="cm">// Change content</span>
title.<span class="attr">textContent</span> = <span class="str">"New Title!"</span>;
title.<span class="attr">innerHTML</span> = <span class="str">"&lt;span&gt;New&lt;/span&gt; Title!"</span>;

<span class="cm">// Change styles / classes</span>
title.<span class="attr">style</span>.<span class="attr">color</span> = <span class="str">"gold"</span>;
title.<span class="attr">classList</span>.<span class="fn">add</span>(<span class="str">"active"</span>);
title.<span class="attr">classList</span>.<span class="fn">toggle</span>(<span class="str">"hidden"</span>);

<span class="cm">// Create + append element</span>
<span class="kw">const</span> btn = document.<span class="fn">createElement</span>(<span class="str">"button"</span>);
btn.<span class="attr">textContent</span> = <span class="str">"Click me"</span>;
document.<span class="attr">body</span>.<span class="fn">appendChild</span>(btn);`,
          codeLang: 'JavaScript', tip: '🌟 Pro Tip: Always cache DOM selections in a variable: const btn = document.querySelector(".btn"). Querying the DOM repeatedly is slow — query once, store in a variable, reuse it!',
          quiz: [
            { q: 'Which method selects the FIRST element matching a CSS selector?', opts: ['getElementById()', 'querySelector()', 'getElement()', 'findElement()'], ans: 1, exp: 'querySelector() selects the first matching element. querySelectorAll() selects ALL matches.' },
            { q: 'Which property changes the text content of an element?', opts: ['innerText', 'html', 'text', 'textContent'], ans: 3, exp: 'textContent gets or sets the text content of an element (no HTML parsing). innerHTML allows HTML tags.' },
            { q: 'Which classList method adds AND removes a class based on whether it exists?', opts: ['classList.switch()', 'classList.flip()', 'classList.toggle()', 'classList.swap()'], ans: 2, exp: 'classList.toggle("class") adds the class if not present, removes it if already present. Great for dark mode, menus, etc.' },
            { q: 'Which method creates a brand new HTML element with JavaScript?', opts: ['document.newElement()', 'document.makeElement()', 'document.addElement()', 'document.createElement()'], ans: 3, exp: 'document.createElement("tag") creates a new element. Then use appendChild() or append() to add it to the DOM.' }
          ]
        },
        { id: 'js-events', title: 'Events', icon: '🖱️', xp: 15,
          intro: 'Events are actions that happen in the browser — clicks, key presses, form submissions, mouse movements. JavaScript listens for events using addEventListener and responds with handler functions.',
          concepts: ['addEventListener("event", handler) — preferred modern way', 'Common events: click, input, submit, keydown, mouseover, change', 'event.preventDefault() — stops default browser behavior', 'event.target — the element that triggered the event', 'Event delegation: put listener on parent, handle multiple children'],
          code: `<span class="kw">const</span> btn = document.<span class="fn">querySelector</span>(<span class="str">"#myBtn"</span>);

<span class="cm">// Click event</span>
btn.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, <span class="kw">function</span>(event) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Clicked!"</span>, event.<span class="attr">target</span>);
});

<span class="cm">// Form submit</span>
form.<span class="fn">addEventListener</span>(<span class="str">"submit"</span>, (e) => {
  e.<span class="fn">preventDefault</span>();   <span class="cm">// stop page reload</span>
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Form submitted!"</span>);
});

<span class="cm">// Input event</span>
input.<span class="fn">addEventListener</span>(<span class="str">"input"</span>, (e) => {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Typed:"</span>, e.<span class="attr">target</span>.<span class="attr">value</span>);
});`,
          codeLang: 'JavaScript', tip: '🌟 Pro Tip: Event delegation — add ONE listener to a parent element, then use event.target to determine which child was clicked. Much better than adding individual listeners to 100 list items!',
          quiz: [
            { q: 'Which method attaches an event handler to an element?', opts: ['element.onEvent()', 'element.addEvent()', 'element.addEventListener()', 'element.bindEvent()'], ans: 2, exp: 'addEventListener("eventName", handlerFunction) is the modern, standard way to attach event handlers. Multiple can be added to one element.' },
            { q: 'What does event.preventDefault() do?', opts: ['Removes the event listener', 'Prevents the event from bubbling up', 'Stops the browser default behavior', 'Cancels the function'], ans: 2, exp: 'event.preventDefault() stops the default browser action. E.g., prevents form submission from reloading the page.' },
            { q: 'Which event fires as the user types into an input?', opts: ['type', 'keypress', 'input', 'change'], ans: 2, exp: 'The input event fires every time the input value changes (on each keystroke). change fires when the element loses focus.' },
            { q: 'What does event.target refer to?', opts: ['The event name string', 'The window object', 'The element that triggered the event', 'The event listener function'], ans: 2, exp: 'event.target is the specific element that was clicked/interacted with — useful in event delegation.' }
          ]
        },
        { id: 'js-apis', title: 'APIs & Fetch', icon: '🌍', xp: 20,
          intro: 'APIs let your website communicate with external servers to get or send data. The Fetch API is the modern way to make HTTP requests in JavaScript using Promises and async/await.',
          concepts: ['fetch(url) returns a Promise — a future value', '.then() handles the resolved value. .catch() handles errors', 'async/await: cleaner syntax for working with Promises', 'response.json() parses the JSON response body', 'REST APIs typically return JSON — the standard data format for web APIs'],
          code: `<span class="cm">// Fetch API with async/await</span>
<span class="kw">async function</span> <span class="fn">getUser</span>() {
  <span class="kw">try</span> {
    <span class="kw">const</span> response = <span class="kw">await</span> <span class="fn">fetch</span>(
      <span class="str">"https://api.github.com/users/taiba"</span>
    );
    <span class="kw">const</span> data = <span class="kw">await</span> response.<span class="fn">json</span>();
    <span class="fn">console</span>.<span class="fn">log</span>(data.<span class="attr">name</span>);
  } <span class="kw">catch</span> (error) {
    <span class="fn">console</span>.<span class="fn">error</span>(<span class="str">"Error:"</span>, error);
  }
}

<span class="fn">getUser</span>();`,
          codeLang: 'JavaScript', tip: '🌟 Pro Tip: Always wrap fetch in try/catch when using async/await, or use .catch() with .then() chains. Network requests can fail — always handle errors gracefully to give users a good experience!',
          quiz: [
            { q: 'What does the fetch() function return?', opts: ['A JSON object', 'An HTML element', 'A Promise', 'A string'], ans: 2, exp: 'fetch() returns a Promise that resolves to a Response object. You then call .json() on it to parse the data.' },
            { q: 'Which keyword makes an async function pause and wait for a Promise?', opts: ['pause', 'wait', 'delay', 'await'], ans: 3, exp: 'await pauses execution inside an async function until the Promise resolves. Makes async code look synchronous.' },
            { q: 'Which method parses the JSON body of a fetch response?', opts: ['response.parse()', 'response.text()', 'response.data()', 'response.json()'], ans: 3, exp: 'response.json() is an async method that parses the response body as JSON and returns the resulting JavaScript object.' },
            { q: 'What does try/catch do in an async function?', opts: ['Speeds up the request', 'Handles errors from failed Promises', 'Creates a new Promise', 'Pauses execution'], ans: 1, exp: 'try/catch handles errors in async code. If a Promise rejects (e.g., network error), the catch block runs instead of crashing the app.' }
          ]
        }
      ],
      challenges: [
        { id: 'js-c1', title: 'Counter App', icon: '🔢', xp: 50, desc: 'Build a counter app with increment, decrement, and reset buttons using DOM manipulation.', reqs: ['Display current count in large text', 'Increment button (+1)', 'Decrement button (-1, min 0)', 'Reset button (back to 0)', 'Count color changes based on value'], hints: ['Use let count = 0 to track state', 'querySelector to get elements, textContent to update display', 'Use addEventListener("click", handler) for each button'], solution: `let count = 0;
const display = document.querySelector('#count');

document.querySelector('#inc').addEventListener('click', () => {
  count++;
  display.textContent = count;
  display.style.color = count > 0 ? 'gold' : 'white';
});

document.querySelector('#dec').addEventListener('click', () => {
  if (count > 0) count--;
  display.textContent = count;
});

document.querySelector('#reset').addEventListener('click', () => {
  count = 0;
  display.textContent = count;
  display.style.color = 'white';
});`},
        { id: 'js-c2', title: 'To-Do App', icon: '✅', xp: 60, desc: 'Build a simple todo app where users can add tasks, check them off, and delete them.', reqs: ['Text input to add tasks', 'Add button (or Enter key)', 'Each task shows a checkbox and delete button', 'Completed tasks are strikethrough', 'Task count display'], hints: ['Store tasks in an array and re-render on change', 'Use addEventListener("keydown") to detect Enter key', 'Use event delegation on the list for click events'], solution: `const tasks = [];
function render() {
  list.innerHTML = tasks.map((t,i) => 
    \`<li>\${t.done ? '<s>' : ''}\${t.text}\${t.done ? '</s>' : ''}
    <button onclick="toggle(\${i})">✓</button>
    <button onclick="del(\${i})">✗</button></li>\`
  ).join('');
}
function add() {
  const text = input.value.trim();
  if (text) { tasks.push({text, done: false}); input.value=''; render(); }
}
const toggle = i => { tasks[i].done = !tasks[i].done; render(); };
const del = i => { tasks.splice(i, 1); render(); };`},
        { id: 'js-c3', title: 'Random Quote Generator', icon: '💬', xp: 50, desc: 'Build a quote generator that shows a random quote from an array on button click with animation.', reqs: ['Array of at least 5 quotes', 'Display quote and author', 'New Quote button', 'Fade animation on quote change', 'Share button (copies to clipboard)'], hints: ['Use Math.floor(Math.random() * quotes.length) for random index', 'Use CSS opacity transition for the fade effect', 'navigator.clipboard.writeText() to copy text'], solution: `const quotes = [
  {text: "Code is poetry.", author: "WordPress"},
  {text: "Keep learning.", author: "Unknown"},
];
const show = () => {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.style.opacity = 0;
  setTimeout(() => {
    quoteEl.textContent = q.text;
    authorEl.textContent = '— ' + q.author;
    quoteEl.style.opacity = 1;
  }, 300);
};
btn.addEventListener('click', show);
show();`},
        { id: 'js-c4', title: 'Fetch GitHub User', icon: '🐙', xp: 70, desc: 'Build a GitHub profile finder that fetches user data from the GitHub API and displays it.', reqs: ['Input for GitHub username', 'Fetch from GitHub API', 'Display avatar, name, bio, followers', 'Loading state while fetching', 'Error handling for invalid users'], hints: ['API URL: https://api.github.com/users/{username}', 'Use async/await with try/catch', 'Show a loading spinner before the fetch resolves'], solution: `async function fetchUser(username) {
  try {
    loading.style.display = 'block';
    const res = await fetch(\`https://api.github.com/users/\${username}\`);
    if (!res.ok) throw new Error('User not found');
    const data = await res.json();
    avatar.src = data.avatar_url;
    name.textContent = data.name || data.login;
    bio.textContent = data.bio || 'No bio';
    followers.textContent = data.followers + ' followers';
  } catch (err) {
    error.textContent = err.message;
  } finally {
    loading.style.display = 'none';
  }
}`}
      ]
    },

    /* ════════════════ PYTHON KINGDOM ════════════════════ */
    python: {
      id: 'python', name: 'Python Kingdom', icon: '🐍',
      color: '#A29BFE', page: 'python.html',
      description: 'Learn the language of AI, data science, and automation',
      lessons: [
        { id: 'py-variables', title: 'Variables', icon: '📦', xp: 10,
          intro: 'In Python, variables are created by simply assigning a value. No keyword needed! Python is dynamically typed — the type is determined automatically. Variable names use snake_case by convention.',
          concepts: ['name = value — no var/let/const needed!', 'Python is dynamically typed (type inferred from value)', 'Snake_case naming: player_score, first_name', 'type() function reveals the data type', 'print() displays values to the console'],
          code: `<span class="cm"># Python Variables — no keywords needed!</span>
player_name = <span class="str">"Taiba"</span>
score = <span class="num">100</span>
is_playing = <span class="val">True</span>
level = <span class="num">1.5</span>

<span class="cm"># Check types</span>
<span class="fn">print</span>(<span class="fn">type</span>(player_name))  <span class="cm"># &lt;class 'str'&gt;</span>
<span class="fn">print</span>(<span class="fn">type</span>(score))        <span class="cm"># &lt;class 'int'&gt;</span>

<span class="cm"># Multiple assignment</span>
x, y, z = <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>
a = b = c = <span class="num">0</span>`,
          codeLang: 'Python', tip: '🌟 Pro Tip: Python boolean values are True and False (capital T and F) — unlike JavaScript which uses true/false (lowercase). This trips up many beginners!',
          quiz: [
            { q: 'How do you create a variable in Python?', opts: ['var x = 5', 'let x = 5', 'x = 5', 'int x = 5'], ans: 2, exp: 'In Python, just write name = value. No keyword needed! Python figures out the type automatically.' },
            { q: 'What naming convention does Python use for variables?', opts: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'], ans: 2, exp: 'Python uses snake_case for variables and functions (words separated by underscores). Example: player_score, first_name.' },
            { q: 'What are Python boolean values?', opts: ['true/false', 'yes/no', 'True/False', '1/0 only'], ans: 2, exp: 'Python booleans are True and False — capitalized! Unlike JavaScript (true/false) or other languages (true/false).' },
            { q: 'Which function shows a value\'s data type?', opts: ['typeof()', 'datatype()', 'type()', 'getType()'], ans: 2, exp: 'type() returns the class of a value. type(42) → &lt;class "int"&gt;, type("hi") → &lt;class "str"&gt;' }
          ]
        },
        { id: 'py-datatypes', title: 'Data Types', icon: '🗂️', xp: 10,
          intro: 'Python has several built-in data types. The most common are integers, floats, strings, and booleans. Python also has powerful collection types like lists, tuples, and dictionaries.',
          concepts: ['int: whole numbers (5, -3, 0)', 'float: decimal numbers (3.14, -2.5)', 'str: text in quotes ("hello", \'world\')', 'bool: True or False', 'None: represents the absence of a value (like null)'],
          code: `<span class="cm"># Core data types</span>
age = <span class="num">25</span>                <span class="cm"># int</span>
height = <span class="num">5.7</span>            <span class="cm"># float</span>
name = <span class="str">"Taiba"</span>          <span class="cm"># str</span>
active = <span class="val">True</span>           <span class="cm"># bool</span>
nothing = <span class="val">None</span>         <span class="cm"># NoneType</span>

<span class="cm"># Type conversion</span>
num_str = <span class="fn">str</span>(<span class="num">42</span>)       <span class="cm"># "42"</span>
num_int = <span class="fn">int</span>(<span class="str">"10"</span>)    <span class="cm"># 10</span>
num_float = <span class="fn">float</span>(<span class="str">"3.5"</span>) <span class="cm"># 3.5</span>

<span class="cm"># String formatting (f-strings)</span>
msg = <span class="str">f"Hello, {name}! Age: {age}"</span>
<span class="fn">print</span>(msg)`,
          codeLang: 'Python', tip: '🌟 Pro Tip: f-strings (formatted string literals) are the modern way to embed variables in strings: f"Hello {name}!" — much cleaner than "Hello " + name + "!" concatenation.',
          quiz: [
            { q: 'Which Python type stores decimal/floating-point numbers?', opts: ['decimal', 'real', 'double', 'float'], ans: 3, exp: 'float stores decimal numbers in Python. Example: pi = 3.14159 — the type is float.' },
            { q: 'What does None represent in Python?', opts: ['0 (zero)', 'False', 'Empty string', 'Absence of a value'], ans: 3, exp: 'None is Python\'s null value — it represents the absence of any value. Similar to null in JavaScript.' },
            { q: 'How do you convert the integer 42 to a string in Python?', opts: ['string(42)', '42.toString()', 'str(42)', '(string)42'], ans: 2, exp: 'str(42) converts the integer 42 to the string "42". Similarly, int("5") converts string "5" to integer 5.' },
            { q: 'Which is correct Python f-string syntax?', opts: ['$"Hello {name}"', '`Hello ${name}`', 'f"Hello {name}"', '"Hello %s" % name'], ans: 2, exp: 'f"Hello {name}" is an f-string (formatted string literal). Variables/expressions inside {} are evaluated and inserted.' }
          ]
        },
        { id: 'py-conditions', title: 'Conditions', icon: '🔀', xp: 10,
          intro: 'Python uses if/elif/else for conditional logic. Python\'s syntax uses indentation (4 spaces) instead of curly braces to define code blocks. This makes Python very readable.',
          concepts: ['if condition: (colon, then indented block)', 'elif (else if — can have multiple)', 'else: (final fallback)', 'Comparison: ==, !=, >, <, >=, <=', 'Logical: and, or, not (not && || !)'],
          code: `score = <span class="num">85</span>

<span class="kw">if</span> score >= <span class="num">90</span>:
    <span class="fn">print</span>(<span class="str">"Grade: A"</span>)
<span class="kw">elif</span> score >= <span class="num">80</span>:
    <span class="fn">print</span>(<span class="str">"Grade: B"</span>)  <span class="cm"># This runs!</span>
<span class="kw">elif</span> score >= <span class="num">70</span>:
    <span class="fn">print</span>(<span class="str">"Grade: C"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"Grade: F"</span>)

<span class="cm"># and / or / not</span>
age = <span class="num">20</span>
<span class="kw">if</span> age >= <span class="num">18</span> <span class="kw">and</span> age < <span class="num">65</span>:
    <span class="fn">print</span>(<span class="str">"Working age"</span>)`,
          codeLang: 'Python', tip: '🌟 Pro Tip: Python uses "and", "or", "not" (English words) instead of &&, ||, ! — making conditions very readable: if age > 18 and is_registered: instead of cryptic symbols.',
          quiz: [
            { q: 'How does Python define code blocks instead of curly braces?', opts: ['Using ( )', 'Using BEGIN/END', 'Using indentation', 'Using #{}'], ans: 2, exp: 'Python uses indentation (spaces) to define code blocks. 4 spaces is the standard. Inconsistent indentation causes errors.' },
            { q: 'What is the Python keyword for "else if"?', opts: ['elseif', 'else if', 'elsif', 'elif'], ans: 3, exp: 'Python uses elif (not else if or elseif). You can chain multiple elif blocks between if and else.' },
            { q: 'Which Python keyword means AND in conditions?', opts: ['&&', '&', 'and', 'AND'], ans: 2, exp: 'Python uses the English word "and" (not &&) for logical AND. Similarly "or" for OR and "not" for NOT.' },
            { q: 'What does the colon (:) do after an if statement?', opts: ['Ends the condition', 'Starts the code block', 'Separates two conditions', 'Nothing, it\'s optional'], ans: 1, exp: 'The colon starts the code block that belongs to the if statement. The next indented lines are executed if the condition is True.' }
          ]
        },
        { id: 'py-loops', title: 'Loops', icon: '🔄', xp: 10,
          intro: 'Python loops let you repeat code. The for loop iterates over sequences (lists, strings, ranges). The while loop runs as long as a condition is true. Python\'s range() function is essential for numeric loops.',
          concepts: ['for item in sequence: — iterates over any iterable', 'range(start, stop, step) — generates number sequences', 'while condition: — loops until condition is False', 'break: exits the loop. continue: skips current iteration', 'enumerate(): gives index + value while iterating'],
          code: `<span class="cm"># For loop with range</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">6</span>):       <span class="cm"># 1,2,3,4,5</span>
    <span class="fn">print</span>(<span class="str">f"Count: {i}"</span>)

<span class="cm"># Iterate over list</span>
skills = [<span class="str">"HTML"</span>, <span class="str">"CSS"</span>, <span class="str">"Python"</span>]
<span class="kw">for</span> skill <span class="kw">in</span> skills:
    <span class="fn">print</span>(<span class="str">f"- {skill}"</span>)

<span class="cm"># Enumerate (index + value)</span>
<span class="kw">for</span> i, skill <span class="kw">in</span> <span class="fn">enumerate</span>(skills):
    <span class="fn">print</span>(<span class="str">f"{i+1}. {skill}"</span>)

<span class="cm"># While loop</span>
count = <span class="num">0</span>
<span class="kw">while</span> count < <span class="num">3</span>:
    <span class="fn">print</span>(count)
    count += <span class="num">1</span>`,
          codeLang: 'Python', tip: '🌟 Pro Tip: range(10) gives 0-9 (10 items). range(1, 11) gives 1-10. range(0, 10, 2) gives even numbers (0,2,4,6,8). The stop value is always EXCLUSIVE (not included).',
          quiz: [
            { q: 'What does range(5) produce?', opts: ['1, 2, 3, 4, 5', '0, 1, 2, 3, 4', '0, 1, 2, 3, 4, 5', '1, 2, 3, 4'], ans: 1, exp: 'range(5) generates 0, 1, 2, 3, 4 — starting from 0, up to (not including) 5. That\'s 5 numbers total.' },
            { q: 'Which Python function gives both index and value while iterating?', opts: ['index()', 'zipWith()', 'enumerate()', 'itemize()'], ans: 2, exp: 'enumerate() returns (index, value) tuples. Use: for i, val in enumerate(my_list): to get both.' },
            { q: 'What does "break" do inside a loop?', opts: ['Pauses for 1 second', 'Skips to next iteration', 'Raises an error', 'Exits the loop immediately'], ans: 3, exp: 'break immediately exits the loop. No more iterations occur. Useful for stopping when a condition is met.' },
            { q: 'What is the correct Python for loop syntax?', opts: ['for (i in list):', 'for i in list:', 'foreach i in list:', 'for i of list:'], ans: 1, exp: 'Python for loop syntax: for variable in iterable: (no parentheses, ends with colon, body indented).' }
          ]
        },
        { id: 'py-functions', title: 'Functions', icon: '⚙️', xp: 10,
          intro: 'Python functions are defined with the def keyword. They promote code reuse and organization. Python supports default arguments, keyword arguments, and can return multiple values.',
          concepts: ['def function_name(params): — function definition', 'return value — sends result back to caller', 'Default args: def greet(name="World"):', 'Keyword args: calculate(a=5, b=10)', 'Docstrings: """Description""" inside function'],
          code: `<span class="kw">def</span> <span class="fn">greet</span>(name=<span class="str">"World"</span>):
    <span class="str">"""Greet someone by name."""</span>
    <span class="kw">return</span> <span class="str">f"Hello, {name}!"</span>

<span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="kw">return</span> a + b

<span class="kw">def</span> <span class="fn">min_max</span>(numbers):
    <span class="cm"># Return multiple values</span>
    <span class="kw">return</span> <span class="fn">min</span>(numbers), <span class="fn">max</span>(numbers)

<span class="fn">print</span>(<span class="fn">greet</span>(<span class="str">"Taiba"</span>))   <span class="cm"># Hello, Taiba!</span>
<span class="fn">print</span>(<span class="fn">greet</span>())         <span class="cm"># Hello, World!</span>
lo, hi = <span class="fn">min_max</span>([<span class="num">3</span>, <span class="num">1</span>, <span class="num">9</span>, <span class="num">5</span>])
<span class="fn">print</span>(lo, hi)          <span class="cm"># 1 9</span>`,
          codeLang: 'Python', tip: '🌟 Pro Tip: Python functions can return multiple values as a tuple: return min_val, max_val — and you can unpack them: low, high = get_range(data). Very Pythonic!',
          quiz: [
            { q: 'Which keyword defines a function in Python?', opts: ['function', 'func', 'fn', 'def'], ans: 3, exp: 'def is Python\'s keyword for defining functions. Syntax: def function_name(parameters):' },
            { q: 'What is a Python docstring?', opts: ['A comment with #', 'A string explaining what a function does', 'A function that prints docs', 'A string variable'], ans: 1, exp: 'A docstring is a triple-quoted string at the start of a function that explains its purpose. Accessible via help() and __doc__.' },
            { q: 'What are default parameters in Python functions?', opts: ['Required parameters', 'Values used when no argument given', 'Return values', 'Global variables'], ans: 1, exp: 'Default parameters provide fallback values. def greet(name="World"): uses "World" if no name is passed.' },
            { q: 'Can a Python function return multiple values?', opts: ['No, only one', 'Yes, as a list only', 'Yes, as a tuple', 'Only with special syntax'], ans: 2, exp: 'Yes! return a, b returns them as a tuple. You can unpack: x, y = my_function(). Very Pythonic!' }
          ]
        },
        { id: 'py-lists', title: 'Lists', icon: '📋', xp: 10,
          intro: 'Python lists are ordered, mutable sequences that can hold any mix of data types. They are one of the most used data structures in Python, similar to JavaScript arrays.',
          concepts: ['Create: items = [1, "two", True, 3.0]', 'Access: items[0] (first), items[-1] (last)', 'Slice: items[1:4] (elements 1,2,3)', 'append(), insert(), remove(), pop(), sort()', 'List comprehension: [x*2 for x in nums if x > 0]'],
          code: `fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>]

<span class="fn">print</span>(fruits[<span class="num">0</span>])      <span class="cm"># "apple"</span>
<span class="fn">print</span>(fruits[-<span class="num">1</span>])     <span class="cm"># "cherry" (last)</span>
<span class="fn">print</span>(fruits[<span class="num">0</span>:<span class="num">2</span>])   <span class="cm"># ["apple", "banana"]</span>

fruits.<span class="fn">append</span>(<span class="str">"date"</span>)   <span class="cm"># add to end</span>
fruits.<span class="fn">remove</span>(<span class="str">"banana"</span>) <span class="cm"># remove by value</span>
fruits.<span class="fn">sort</span>()            <span class="cm"># sort alphabetically</span>

<span class="cm"># List comprehension (Pythonic!)</span>
nums = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
squares = [n**<span class="num">2</span> <span class="kw">for</span> n <span class="kw">in</span> nums]
<span class="fn">print</span>(squares)  <span class="cm"># [1, 4, 9, 16, 25]</span>`,
          codeLang: 'Python', tip: '🌟 Pro Tip: Negative indexing is very Pythonic! list[-1] is the last element, list[-2] is second to last — no need to calculate length: list[len(list)-1] is ugly; list[-1] is beautiful.',
          quiz: [
            { q: 'What does list[-1] return?', opts: ['An error', 'The first element', 'The second element', 'The last element'], ans: 3, exp: 'Negative indexing in Python counts from the end. -1 is last, -2 is second-to-last. Very useful!' },
            { q: 'Which method adds an element to the END of a list?', opts: ['add()', 'push()', 'append()', 'insert()'], ans: 2, exp: 'append() adds an element to the end of a list. insert(index, value) adds at a specific position.' },
            { q: 'What is a list comprehension?', opts: ['Compressing a list', 'A list type from library', 'A compact way to create/transform lists', 'Listing all list methods'], ans: 2, exp: 'List comprehension is a concise way to create lists: [expression for item in iterable if condition]. Very Pythonic!' },
            { q: 'What does list[1:4] return?', opts: ['Elements at index 1, 4', 'Elements at index 1, 2, 3', 'Elements at index 1 to 4 (inclusive)', 'The 4th element only'], ans: 1, exp: 'Slicing list[start:stop] returns elements from start up to (not including) stop. list[1:4] → elements at index 1, 2, 3.' }
          ]
        },
        { id: 'py-dicts', title: 'Dictionaries', icon: '📖', xp: 15,
          intro: 'Python dictionaries store key-value pairs (like JavaScript objects). They provide fast lookup by key and are perfect for structured data. Keys must be unique and immutable.',
          concepts: ['Create: person = {"name": "Taiba", "age": 25}', 'Access: person["name"] or person.get("name", default)', 'Add/Update: person["email"] = "..."', 'Keys/Values: .keys(), .values(), .items()', 'dict comprehension: {k: v for k,v in pairs}'],
          code: `player = {
    <span class="str">"name"</span>: <span class="str">"Taiba"</span>,
    <span class="str">"score"</span>: <span class="num">1500</span>,
    <span class="str">"level"</span>: <span class="num">3</span>,
    <span class="str">"skills"</span>: [<span class="str">"HTML"</span>, <span class="str">"CSS"</span>]
}

<span class="fn">print</span>(player[<span class="str">"name"</span>])          <span class="cm"># "Taiba"</span>
<span class="fn">print</span>(player.<span class="fn">get</span>(<span class="str">"rank"</span>, <span class="str">"N/A"</span>)) <span class="cm"># "N/A" (safe!)</span>

player[<span class="str">"score"</span>] = <span class="num">2000</span>          <span class="cm"># update</span>
player[<span class="str">"badge"</span>] = <span class="str">"Gold"</span>         <span class="cm"># add new</span>

<span class="cm"># Loop through dict</span>
<span class="kw">for</span> key, value <span class="kw">in</span> player.<span class="fn">items</span>():
    <span class="fn">print</span>(<span class="str">f"{key}: {value}"</span>)`,
          codeLang: 'Python', tip: '🌟 Pro Tip: Use dict.get("key", default) instead of dict["key"] when a key might not exist. dict["missing_key"] raises a KeyError, but dict.get("missing_key", "default") safely returns the default!',
          quiz: [
            { q: 'How do you safely access a dict key that might not exist?', opts: ['dict["key"]', 'dict.find("key")', 'dict.get("key", default)', 'dict.key'], ans: 2, exp: '.get("key", default) returns the value if key exists, or the default if it doesn\'t. Prevents KeyError crashes.' },
            { q: 'Which method returns all key-value pairs as tuples?', opts: ['.entries()', '.pairs()', '.items()', '.kv()'], ans: 2, exp: '.items() returns a view of (key, value) tuples. Perfect for: for key, val in my_dict.items():' },
            { q: 'Which of these is a valid Python dictionary?', opts: ['{name: "Taiba"}', '{"name": "Taiba"}', '["name": "Taiba"]', '(name = "Taiba")'], ans: 1, exp: 'Dictionary syntax uses curly braces with "key": value pairs. Keys must be quoted strings (or other immutable types).' },
            { q: 'Are dictionary keys unique in Python?', opts: ['No, duplicates allowed', 'Depends on the type', 'Yes, each key must be unique', 'Only string keys are unique'], ans: 2, exp: 'Dictionary keys must be unique. If you add a duplicate key, it overwrites the existing value rather than adding a new entry.' }
          ]
        },
        { id: 'py-projects', title: 'Mini Projects', icon: '🚀', xp: 20,
          intro: 'The best way to master Python is to build things! Mini projects combine all concepts: variables, conditions, loops, functions, lists, and dictionaries into real programs. Let\'s see Python in action!',
          concepts: ['Design first: break problem into small steps', 'Use functions to organize each step', 'Test with different inputs to catch edge cases', 'Python built-ins: len(), max(), min(), sum(), sorted()', 'input() gets user input. int() / float() converts it'],
          code: `<span class="cm"># Mini Calculator</span>
<span class="kw">def</span> <span class="fn">calculate</span>(num1, op, num2):
    <span class="kw">if</span> op == <span class="str">"+"</span>: <span class="kw">return</span> num1 + num2
    <span class="kw">elif</span> op == <span class="str">"-"</span>: <span class="kw">return</span> num1 - num2
    <span class="kw">elif</span> op == <span class="str">"*"</span>: <span class="kw">return</span> num1 * num2
    <span class="kw">elif</span> op == <span class="str">"/"</span>:
        <span class="kw">if</span> num2 == <span class="num">0</span>: <span class="kw">return</span> <span class="str">"Error: ÷ by zero"</span>
        <span class="kw">return</span> num1 / num2
    <span class="kw">return</span> <span class="str">"Unknown operator"</span>

<span class="fn">print</span>(<span class="fn">calculate</span>(<span class="num">10</span>, <span class="str">"+"</span>, <span class="num">5</span>))  <span class="cm"># 15</span>
<span class="fn">print</span>(<span class="fn">calculate</span>(<span class="num">10</span>, <span class="str">"/"</span>, <span class="num">0</span>))  <span class="cm"># Error</span>`,
          codeLang: 'Python', tip: '🌟 Pro Tip: A great project workflow: 1) Understand the problem, 2) Plan the logic on paper, 3) Write functions one at a time, 4) Test each function before moving on. Small steps lead to big programs!',
          quiz: [
            { q: 'What does the Python input() function do?', opts: ['Reads a file', 'Generates random input', 'Gets text input from the user', 'Inputs a module'], ans: 2, exp: 'input("prompt") displays a prompt and waits for user to type something. Always returns a string — convert with int() or float() if needed.' },
            { q: 'What will int("25") return?', opts: ['"25"', '25.0', '25', 'Error'], ans: 2, exp: 'int("25") converts the string "25" to the integer 25. Use this when you get numbers via input(), which always returns strings.' },
            { q: 'Which function returns the total sum of a list of numbers?', opts: ['total()', 'count()', 'sum()', 'add()'], ans: 2, exp: 'sum([1,2,3,4,5]) returns 15. It works on any iterable of numbers. Python built-ins like sum(), min(), max() save a lot of code!' },
            { q: 'What is the BEST first step when building a Python program?', opts: ['Start typing code immediately', 'Import all libraries first', 'Break the problem into smaller steps', 'Test without a plan'], ans: 2, exp: 'Planning is essential! Break the problem into smaller functions/steps first. This prevents confusion and makes the code easier to write and debug.' }
          ]
        }
      ],
      challenges: [
        { id: 'py-c1', title: 'Calculator Quiz', icon: '🧮', xp: 50, desc: 'Answer Python calculator logic questions — predict what the code outputs.', reqs: ['Question 1: 10 + 3 * 2 = ?', 'Question 2: 10 / 3 vs 10 // 3', 'Question 3: 2 ** 8 = ?', 'Question 4: 17 % 5 = ?'], hints: ['Python follows PEMDAS/BODMAS order of operations', '// is floor division (rounds down)', '** is exponentiation (power)', '% is modulo (remainder after division)'], solution: `# 10 + 3 * 2 = 16 (multiplication first!)
# 10 / 3 = 3.333... (float division)
# 10 // 3 = 3 (floor division, integer result)
# 2 ** 8 = 256 (2 to the power of 8)
# 17 % 5 = 2 (17 = 3*5 + 2, remainder is 2)

# Python operators:
print(10 + 3 * 2)   # 16
print(10 // 3)      # 3
print(2 ** 8)       # 256
print(17 % 5)       # 2`},
        { id: 'py-c2', title: 'Number Guessing Logic', icon: '🎲', xp: 60, desc: 'Trace through this Python number guessing game logic and predict the output.', reqs: ['Understand while loop condition', 'Trace input comparisons', 'Identify correct output messages', 'Spot the break statement'], hints: ['Trace the code step by step from top to bottom', 'Check what happens when guess == secret', 'What does break do inside a while loop?'], solution: `import random

secret = random.randint(1, 10)
attempts = 0

while True:
    guess = int(input("Guess (1-10): "))
    attempts += 1
    
    if guess < secret:
        print("Too low! Try higher.")
    elif guess > secret:
        print("Too high! Try lower.")
    else:
        print(f"Correct! You got it in {attempts} attempt(s)!")
        break

# The loop runs until the user guesses correctly
# break exits the while True loop when guess == secret`},
        { id: 'py-c3', title: 'Syntax Challenge', icon: '🔍', xp: 50, desc: 'Spot and fix the syntax errors in these Python code snippets.', reqs: ['Fix missing colon after if/for/def', 'Fix indentation errors', 'Fix incorrect boolean values', 'Fix string concatenation with numbers'], hints: ['Python requires colon after if, for, while, def, else', 'Indented blocks must be consistent (4 spaces)', 'Boolean: True/False (capitalized!)', 'Cannot concatenate str + int — use str() or f-strings'], solution: `# BROKEN CODE:
# def greet(name)          ← missing colon
#     Print("Hello", name) ← Print should be print

# FIXED CODE:
def greet(name):
    print("Hello", name)

# BROKEN: for i in range(5)
# FIXED: for i in range(5):

# BROKEN: if x > 0
# FIXED: if x > 0:

# BROKEN: active = true
# FIXED: active = True  (capital T!)`},
        { id: 'py-c4', title: 'List & Dict Operations', icon: '📊', xp: 60, desc: 'Write Python code to process a list of student scores and produce a summary dictionary.', reqs: ['Calculate average score', 'Find highest and lowest scores', 'Count how many passed (>=50)', 'Store results in a dictionary', 'Print formatted summary'], hints: ['Use sum() and len() for average', 'Use max() and min() for highest/lowest', 'Use list comprehension to filter passing scores', 'Store everything in a dict and print with f-strings'], solution: `scores = [85, 42, 91, 67, 55, 78, 33, 95, 61, 74]

summary = {
    "total_students": len(scores),
    "average": sum(scores) / len(scores),
    "highest": max(scores),
    "lowest": min(scores),
    "passed": len([s for s in scores if s >= 50]),
    "failed": len([s for s in scores if s < 50])
}

for key, value in summary.items():
    print(f"{key}: {value}")`}
      ]
    }
  },

  /* ── ACHIEVEMENTS ──────────────────────────────────────── */
  achievements: [
    { id: 'first-step',    icon: '👣', name: 'First Steps',      desc: 'Complete your very first lesson',          color: '#74b9ff' },
    { id: 'html-hero',     icon: '🏅', name: 'HTML Hero',         desc: 'Complete all 7 HTML lessons',             color: '#FF6B35' },
    { id: 'css-champion',  icon: '🎨', name: 'CSS Champion',      desc: 'Complete all 7 CSS lessons',              color: '#00CEC9' },
    { id: 'js-wizard',     icon: '⚡', name: 'JS Wizard',         desc: 'Complete all 8 JavaScript lessons',       color: '#FDCB6E' },
    { id: 'python-master', icon: '🐍', name: 'Python Master',     desc: 'Complete all 8 Python lessons',           color: '#A29BFE' },
    { id: 'quiz-genius',   icon: '🧠', name: 'Quiz Genius',       desc: 'Score 100% on any 5 quizzes',            color: '#fd79a8' },
    { id: 'challenger',    icon: '🎯', name: 'Challenger',        desc: 'Complete 5 coding challenges',            color: '#00b894' },
    { id: 'level-up',     icon: '⬆️', name: 'Level Up!',         desc: 'Reach Level 3 — Coder',                  color: '#fdcb6e' },
    { id: 'xp-1000',       icon: '💰', name: 'XP Millionaire',    desc: 'Earn 1000+ total XP',                    color: '#FFD700' },
    { id: 'consistency',   icon: '🔥', name: 'Consistency King',  desc: 'Complete daily challenge 3 days in a row',color: '#e17055' }
  ],

  /* ── LEVEL THRESHOLDS ──────────────────────────────────── */
  levels: [
    { level: 1, name: 'Beginner',        minXP: 0,    maxXP: 100  },
    { level: 2, name: 'Explorer',        minXP: 100,  maxXP: 300  },
    { level: 3, name: 'Coder',           minXP: 300,  maxXP: 600  },
    { level: 4, name: 'Developer',       minXP: 600,  maxXP: 1000 },
    { level: 5, name: 'Coding Master',   minXP: 1000, maxXP: Infinity }
  ],

  /* ── DAILY CHALLENGES ──────────────────────────────────── */
  dailyChallenges: [
    { category: 'HTML',   question: 'What is the correct HTML5 doctype declaration?',                                                                  answer: '&lt;!DOCTYPE html&gt;', options: ['&lt;!DOCTYPE HTML5&gt;', '&lt;!DOCTYPE html&gt;', '&lt;html doctype&gt;', '&lt;!doctype&gt;'], correct: 1 },
    { category: 'CSS',    question: 'Which CSS property controls the stacking order of elements?',                                                     answer: 'z-index',           options: ['stack-order', 'layer', 'z-index', 'depth'],           correct: 2 },
    { category: 'JS',     question: 'What method converts a JSON string to a JavaScript object?',                                                      answer: 'JSON.parse()',      options: ['JSON.parse()', 'JSON.convert()', 'JSON.decode()', 'parseJSON()'], correct: 0 },
    { category: 'Python', question: 'Which Python function returns the length of a list?',                                                             answer: 'len()',             options: ['size()', 'count()', 'length()', 'len()'],             correct: 3 },
    { category: 'HTML',   question: 'Which attribute adds a tooltip when hovering over an element?',                                                   answer: 'title',             options: ['alt', 'tooltip', 'hint', 'title'],                    correct: 3 },
    { category: 'CSS',    question: 'What CSS value makes an element invisible but still takes up space?',                                             answer: 'visibility: hidden',options: ['display: none', 'opacity: 0', 'visibility: hidden', 'hidden: true'], correct: 2 },
    { category: 'JS',     question: 'Which array method returns true if ANY element passes the test?',                                                 answer: 'some()',            options: ['any()', 'some()', 'includes()', 'find()'],            correct: 1 },
    { category: 'Python', question: 'What is the output of: print(type([]))?',                                                                        answer: '&lt;class "list"&gt;', options: ['list', '[]', '&lt;class "list"&gt;', '&lt;class "array"&gt;'], correct: 2 },
    { category: 'HTML',   question: 'Which input type creates a color picker?',                                                                        answer: 'type="color"',     options: ['type="colour"', 'type="picker"', 'type="color"', 'type="rgb"'], correct: 2 },
    { category: 'CSS',    question: 'Which property sets the mouse cursor when hovering over an element?',                                             answer: 'cursor',            options: ['mouse', 'pointer', 'cursor', 'hover-cursor'],         correct: 2 }
  ]
};

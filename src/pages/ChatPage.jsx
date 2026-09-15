// import { useEffect, useRef, useState } from 'react';
// import Header from '../components/Header';
// import SuggestedQuestions from '../components/SuggestedQuestions';
// import MessageBubble from '../components/MessageBubble';
// import CitationPanel from '../components/CitationPanel';
// import { askIpSakti } from '../services/api';

// const text = {
//   en: { brandSub: 'India’s source-aware IP intelligence', evidenceMode: 'Evidence mode', india: 'India', global: 'Global', case: 'CASE CONTEXT', category: 'Product category', select: 'Select category', classical: 'Classical AYUSH', drug: 'New drug', plant: 'Plant research', export: 'Export / international', question: 'Question', evidence: 'Evidence', decision: 'Decision', eyebrowIndia: 'INTELLECTUAL PROPERTY · INDIA', eyebrowGlobal: 'INTELLECTUAL PROPERTY · GLOBAL', titleIndia: <>From question to<br/><em>defensible clarity.</em></>, titleGlobal: <>From local insight to<br/><em>global readiness.</em></>, introIndia: 'IP-SAKTI is a source-aware decision workspace for AYUSH innovation, traditional knowledge and India market readiness.', introGlobal: 'IP-SAKTI is a source-aware decision workspace for intellectual property and cross-border market readiness.', evidenceFirst: 'Evidence first', confidence: 'Confidence visible', noGuess: 'No guesswork', placeholder: 'Describe your IP, compliance or market question…', analyse: 'Analyse', disclaimer: 'Information, not legal advice.', disclaimerRest: 'Answers remain traceable to the sources in your evidence vault.', expert: '◎ Request expert review', loading: 'Searching verified legal context…', error: 'Unable to reach IP-SAKTI right now.', errorHelp: 'Check that the evidence server is running, then retry.', retry: 'Try Again', vault: 'EVIDENCE VAULT', workspace: 'Source workspace', sources: 'Sources', trace: 'Trace', ready: 'Ready for a verified answer', readyText: 'Ask a question to reveal the legal sources, cited passages and confidence level behind IP-SAKTI’s response.', noSource: 'No source is shown before verification', traceText: 'Trace the evidence used to support this response.', source: 'SOURCE', followUp: 'Ask another question', newCase: 'New case' },
//   hi: {
//   brandSub: 'भारत की प्रमाणित स्रोत-आधारित बौद्धिक संपदा जानकारी',
//   evidenceMode: 'साक्ष्य मोड',

//   india: 'भारत',
//   global: 'वैश्विक',

//   case: 'मामले का संदर्भ',
//   category: 'उत्पाद श्रेणी',
//   select: 'श्रेणी चुनें',

//   classical: 'शास्त्रीय आयुष',
//   drug: 'नई औषधि',
//   plant: 'औषधीय पौधा अनुसंधान',
//   export: 'निर्यात / अंतरराष्ट्रीय',

//   question: 'प्रश्न',
//   evidence: 'साक्ष्य',
//   decision: 'निर्णय',

//   eyebrowIndia: 'बौद्धिक संपदा · भारत',
//   eyebrowGlobal: 'बौद्धिक संपदा · वैश्विक',

//   titleIndia: (
//     <>
//       प्रश्न से शुरू करें और<br />
//       <em>स्पष्ट एवं विश्वसनीय निर्णय तक पहुँचें।</em>
//     </>
//   ),

//   titleGlobal: (
//     <>
//       स्थानीय जानकारी से<br />
//       <em>वैश्विक बाज़ार की तैयारी तक।</em>
//     </>
//   ),

//   introIndia:
//     'IP-SAKTI आयुष नवाचार, पारंपरिक ज्ञान और भारतीय बाज़ार में प्रवेश से जुड़े निर्णयों के लिए प्रमाणित स्रोतों पर आधारित एक कार्यक्षेत्र है।',

//   introGlobal:
//     'IP-SAKTI बौद्धिक संपदा और अंतरराष्ट्रीय बाज़ार में प्रवेश से जुड़े निर्णयों के लिए प्रमाणित स्रोतों पर आधारित एक कार्यक्षेत्र है।',

//   evidenceFirst: 'पहले साक्ष्य',
//   confidence: 'विश्वसनीयता स्पष्ट',
//   noGuess: 'कोई अनुमान नहीं',

//   placeholder:
//     'अपना बौद्धिक संपदा, अनुपालन या बाज़ार संबंधी प्रश्न लिखें…',

//   analyse: 'विश्लेषण करें',

//   disclaimer:
//     'यह जानकारी है, कानूनी सलाह नहीं।',

//   disclaimerRest:
//     'हर उत्तर Evidence Vault में उपलब्ध स्रोतों से सत्यापित और ट्रेस किया जा सकता है।',

//   expert: '◎ विशेषज्ञ समीक्षा का अनुरोध करें',

//   loading:
//     'सत्यापित कानूनी जानकारी खोजी जा रही है…',

//   error:
//     'अभी IP-SAKTI से कनेक्ट नहीं हो पा रहा है।',

//   errorHelp:
//     'कृपया सुनिश्चित करें कि Evidence Server चल रहा है और फिर दोबारा प्रयास करें।',

//   retry: 'दोबारा प्रयास करें',

//   vault: 'साक्ष्य भंडार',
//   workspace: 'स्रोत कार्यक्षेत्र',

//   sources: 'स्रोत',
//   trace: 'ट्रेस',

//   ready:
//     'सत्यापित उत्तर के लिए तैयार',

//   readyText:
//     'कानूनी स्रोत, संदर्भित अंश और उत्तर की विश्वसनीयता देखने के लिए अपना प्रश्न पूछें।',

//   noSource:
//     'सत्यापन से पहले कोई स्रोत प्रदर्शित नहीं किया जाता।',

//   traceText:
//     'इस उत्तर के समर्थन में उपयोग किए गए साक्ष्य को देखें।',

//   source: 'स्रोत',

//   followUp:
//     'एक और प्रश्न पूछें',

//   newCase:
//     'नया मामला'
// }

// };

// export default function ChatPage() {
//   const [jurisdiction, setJurisdiction] = useState('india'); const [language, setLanguage] = useState('en'); const [productType, setProductType] = useState('unknown'); const [question, setQuestion] = useState(''); const [messages, setMessages] = useState([]); const [sources, setSources] = useState([]); const [loading, setLoading] = useState(false); const [error, setError] = useState(false); const [modal, setModal] = useState(false); const endRef = useRef(null);
//   const copy = text[language];
//   useEffect(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages, loading, error]);
//   async function send() { const text = question.trim(); if (!text || loading) return; setQuestion(''); setError(false); setLoading(true); setSources([]); setMessages((m) => [...m, { role: 'user', content: text }]); try { const result = await askIpSakti({ question: text, jurisdiction, product_type: productType, language }); setMessages((m) => [...m, { role: 'assistant', content: result.answer, confidence: result.confidence, declined: result.declined }]); setSources(result.sources || []); } catch { setError(true); } finally { setLoading(false); } }
//   function choose(item) { setProductType(item.type); if (item.type === 'export') setJurisdiction('international'); setQuestion(item.text); setTimeout(() => document.getElementById('question')?.focus(), 0); }
//   function changeJurisdiction(value) { setJurisdiction(value); if (value === 'international' && productType === 'unknown') setProductType('export'); }
//   function focusQuestion() { document.getElementById('question')?.focus(); }
//   function newCase() { setMessages([]); setSources([]); setQuestion(''); setError(false); setProductType(jurisdiction === 'international' ? 'export' : 'unknown'); focusQuestion(); }
//   return <div className="app-shell" id="top"><Header jurisdiction={jurisdiction} setJurisdiction={changeJurisdiction} language={language} setLanguage={setLanguage} copy={copy}/><main className="chat-layout"><section className="conversation" aria-label="IP-SAKTI conversation"><div className="case-bar"><span>{copy.case}</span><label>{copy.category}<select value={productType} onChange={(e) => setProductType(e.target.value)}><option value="unknown">{copy.select}</option><option value="classical">{copy.classical}</option><option value="new-drug">{copy.drug}</option><option value="plant-research">{copy.plant}</option><option value="export">{copy.export}</option></select></label><b>01 <small>{copy.question}</small> <i>→</i> 02 <small>{copy.evidence}</small> <i>→</i> 03 <small>{copy.decision}</small></b>{messages.length > 0 && <button className="case-reset" onClick={newCase}>↺ {copy.newCase}</button>}</div>{messages.length === 0 && <section className="welcome"><img
//   src="/ipsaktilogo.png"
//   alt="IP-SAKTI Logo"
//   className="welcome-seal"
// /><span className="eyebrow">{jurisdiction === 'india' ? copy.eyebrowIndia : copy.eyebrowGlobal}</span><h1>{jurisdiction === 'india' ? copy.titleIndia : copy.titleGlobal}</h1><p>{jurisdiction === 'india' ? copy.introIndia : copy.introGlobal}</p><div className="trust-row"><span>✦ {copy.evidenceFirst}</span><span>◉ {copy.confidence}</span><span>⌁ {copy.noGuess}</span></div><SuggestedQuestions onSelect={choose}/></section>}<div className="message-thread">{messages.map((message, index) => <MessageBubble key={index} message={message} onFollowUp={focusQuestion} followUpLabel={copy.followUp}/>)}</div>{loading && <div className="typing"><span><i/><i/><i/></span> {copy.loading}</div>}{error && <section className="error-card" role="alert"><strong>{copy.error}</strong><span>{copy.errorHelp}</span><button onClick={send}>{copy.retry}</button></section>}<div ref={endRef}/><form className="question-form" onSubmit={(e) => {e.preventDefault(); send();}}><label className="sr-only" htmlFor="question">Ask your IP question</label><span className="prompt-icon">⌕</span><textarea id="question" value={question} onChange={(e) => setQuestion(e.target.value)} onKeyDown={(e) => {if(e.key === 'Enter' && !e.shiftKey) {e.preventDefault(); send();}}} placeholder={copy.placeholder} rows="1" disabled={loading}/><button disabled={loading || !question.trim()}>{copy.analyse} <span>↗</span></button></form><div className="chat-footer"><p className="disclaimer"><strong>{copy.disclaimer}</strong> {copy.disclaimerRest}</p><button className="escalate" onClick={() => setModal(true)}>{copy.expert}</button></div></section><CitationPanel sources={sources} copy={copy}/></main>{modal && <div className="modal-backdrop" onMouseDown={() => setModal(false)}><section className="modal" role="dialog" aria-modal="true" onMouseDown={(e) => e.stopPropagation()}><span className="eyebrow">EXPERT REVIEW</span><h2>Need expert assistance?</h2><p>This question may require review by an IP professional. This is a prototype request flow — no expert has been contacted.</p><button onClick={() => setModal(false)}>Continue</button></section></div>}</div>;
// }





import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import SuggestedQuestions from '../components/SuggestedQuestions';
import MessageBubble from '../components/MessageBubble';
import CitationPanel from '../components/CitationPanel';
import { askIpSakti } from '../services/api';

const text = {
  // =========================
  // ENGLISH
  // =========================
  en: {
    brandSub: 'India’s source-aware IP intelligence',
    evidenceMode: 'Evidence mode',

    india: 'India',
    global: 'Global',

    case: 'CASE CONTEXT',
    category: 'Product category',
    select: 'Select category',

    classical: 'Classical AYUSH',
    drug: 'New drug',
    plant: 'Plant research',
    export: 'Export / international',

    question: 'Question',
    evidence: 'Evidence',
    decision: 'Decision',

    eyebrowIndia: 'INTELLECTUAL PROPERTY · INDIA',
    eyebrowGlobal: 'INTELLECTUAL PROPERTY · GLOBAL',

    titleIndia: (
      <>
        From question to
        <br />
        <em>defensible clarity.</em>
      </>
    ),

    titleGlobal: (
      <>
        From local insight to
        <br />
        <em>global readiness.</em>
      </>
    ),

    introIndia:
      'IP-SAKTI is a source-aware decision workspace for AYUSH innovation, traditional knowledge and India market readiness.',

    introGlobal:
      'IP-SAKTI is a source-aware decision workspace for intellectual property and cross-border market readiness.',

    evidenceFirst: 'Evidence first',
    confidence: 'Confidence visible',
    noGuess: 'No guesswork',

    placeholder:
      'Describe your IP, compliance or market question…',

    analyse: 'Analyse',

    disclaimer: 'Information, not legal advice.',

    disclaimerRest:
      'Answers remain traceable to the sources in your evidence vault.',

    expert: '◎ Request expert review',

    loading:
      'Searching verified legal context…',

    error:
      'Unable to reach IP-SAKTI right now.',

    errorHelp:
      'Check that the evidence server is running, then retry.',

    retry: 'Try Again',

    vault: 'EVIDENCE VAULT',
    workspace: 'Source workspace',

    sources: 'Sources',
    trace: 'Trace',

    ready: 'Ready for a verified answer',

    readyText:
      'Ask a question to reveal the legal sources, cited passages and confidence level behind IP-SAKTI’s response.',

    noSource:
      'No source is shown before verification',

    traceText:
      'Trace the evidence used to support this response.',

    source: 'SOURCE',

    followUp: 'Ask another question',

    newCase: 'New case',

    expertTitle: 'Need expert assistance?',

    expertText:
      'This question may require review by an IP professional. This is a prototype request flow — no expert has been contacted.',

    continue: 'Continue'
  },

  // =========================
  // HINDI
  // =========================
  hi: {
    brandSub:
      'भारत की प्रमाणित स्रोत-आधारित बौद्धिक संपदा जानकारी',

    evidenceMode:
      'साक्ष्य मोड',

    india: 'भारत',
    global: 'वैश्विक',

    case: 'मामले का संदर्भ',

    category: 'उत्पाद श्रेणी',

    select: 'श्रेणी चुनें',

    classical: 'शास्त्रीय आयुष',

    drug: 'नई औषधि',

    plant: 'औषधीय पौधा अनुसंधान',

    export: 'निर्यात / अंतरराष्ट्रीय',

    question: 'प्रश्न',

    evidence: 'साक्ष्य',

    decision: 'निर्णय',

    eyebrowIndia:
      'बौद्धिक संपदा · भारत',

    eyebrowGlobal:
      'बौद्धिक संपदा · वैश्विक',

    titleIndia: (
      <>
        प्रश्न से शुरू करें और
        <br />
        <em>स्पष्ट एवं विश्वसनीय निर्णय तक पहुँचें।</em>
      </>
    ),

    titleGlobal: (
      <>
        स्थानीय जानकारी से
        <br />
        <em>वैश्विक बाज़ार की तैयारी तक।</em>
      </>
    ),

    introIndia:
      'IP-SAKTI आयुष नवाचार, पारंपरिक ज्ञान और भारतीय बाज़ार में प्रवेश से जुड़े निर्णयों के लिए प्रमाणित स्रोतों पर आधारित एक कार्यक्षेत्र है।',

    introGlobal:
      'IP-SAKTI बौद्धिक संपदा और अंतरराष्ट्रीय बाज़ार में प्रवेश से जुड़े निर्णयों के लिए प्रमाणित स्रोतों पर आधारित एक कार्यक्षेत्र है।',

    evidenceFirst:
      'पहले साक्ष्य',

    confidence:
      'विश्वसनीयता स्पष्ट',

    noGuess:
      'कोई अनुमान नहीं',

    placeholder:
      'अपना बौद्धिक संपदा, अनुपालन या बाज़ार संबंधी प्रश्न लिखें…',

    analyse:
      'विश्लेषण करें',

    disclaimer:
      'यह जानकारी है, कानूनी सलाह नहीं।',

    disclaimerRest:
      'हर उत्तर Evidence Vault में उपलब्ध स्रोतों से सत्यापित और ट्रेस किया जा सकता है।',

    expert:
      '◎ विशेषज्ञ समीक्षा का अनुरोध करें',

    loading:
      'सत्यापित कानूनी जानकारी खोजी जा रही है…',

    error:
      'अभी IP-SAKTI से कनेक्ट नहीं हो पा रहा है।',

    errorHelp:
      'कृपया सुनिश्चित करें कि Evidence Server चल रहा है और फिर दोबारा प्रयास करें।',

    retry:
      'दोबारा प्रयास करें',

    vault:
      'साक्ष्य भंडार',

    workspace:
      'स्रोत कार्यक्षेत्र',

    sources:
      'स्रोत',

    trace:
      'ट्रेस',

    ready:
      'सत्यापित उत्तर के लिए तैयार',

    readyText:
      'कानूनी स्रोत, संदर्भित अंश और उत्तर की विश्वसनीयता देखने के लिए अपना प्रश्न पूछें।',

    noSource:
      'सत्यापन से पहले कोई स्रोत प्रदर्शित नहीं किया जाता।',

    traceText:
      'इस उत्तर के समर्थन में उपयोग किए गए साक्ष्य को देखें।',

    source:
      'स्रोत',

    followUp:
      'एक और प्रश्न पूछें',

    newCase:
      'नया मामला',

    expertTitle:
      'क्या आपको विशेषज्ञ सहायता चाहिए?',

    expertText:
      'इस प्रश्न के लिए किसी IP विशेषज्ञ की समीक्षा आवश्यक हो सकती है। यह केवल एक प्रोटोटाइप अनुरोध प्रक्रिया है — अभी किसी विशेषज्ञ से संपर्क नहीं किया गया है।',

    continue:
      'जारी रखें'
  }
};

export default function ChatPage() {
  // =========================
  // STATE
  // =========================

  const [jurisdiction, setJurisdiction] = useState('india');

  const [language, setLanguage] = useState('en');

  const [productType, setProductType] = useState('unknown');

  const [question, setQuestion] = useState('');

  const [messages, setMessages] = useState([]);

  const [sources, setSources] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const [modal, setModal] = useState(false);

  const endRef = useRef(null);

  // Current language copy
  const copy = text[language] || text.en;

  // =========================
  // AUTO SCROLL
  // =========================

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages, loading, error]);

  // =========================
  // SEND QUESTION
  // =========================

  async function send() {
    const currentQuestion = question.trim();

    if (!currentQuestion || loading) {
      return;
    }

    // Clear input
    setQuestion('');

    // Reset states
    setError(false);
    setLoading(true);
    setSources([]);

    // Add user's question
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        role: 'user',
        content: currentQuestion
      }
    ]);

    try {
      // Send question to backend
      const result = await askIpSakti({
        question: currentQuestion,
        jurisdiction,
        product_type: productType,
        language
      });

      // Add backend answer
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: 'assistant',
          content: result.answer,
          confidence: result.confidence,
          declined: result.declined
        }
      ]);

      // Add sources
      setSources(result.sources || []);

    } catch (err) {
      console.error('IP-SAKTI API Error:', err);

      setError(true);
    } finally {
      setLoading(false);
    }
  }

  // =========================
  // SUGGESTED QUESTION
  // =========================

  function choose(item) {
    setProductType(item.type);

    if (item.type === 'export') {
      setJurisdiction('international');
    }

    setQuestion(item.text);

    setTimeout(() => {
      document.getElementById('question')?.focus();
    }, 0);
  }

  // =========================
  // CHANGE JURISDICTION
  // =========================

  function changeJurisdiction(value) {
    setJurisdiction(value);

    if (
      value === 'international' &&
      productType === 'unknown'
    ) {
      setProductType('export');
    }
  }

  // =========================
  // FOCUS QUESTION INPUT
  // =========================

  function focusQuestion() {
    document.getElementById('question')?.focus();
  }

  // =========================
  // NEW CASE
  // =========================

  function newCase() {
    setMessages([]);

    setSources([]);

    setQuestion('');

    setError(false);

    setProductType(
      jurisdiction === 'international'
        ? 'export'
        : 'unknown'
    );

    setTimeout(() => {
      focusQuestion();
    }, 0);
  }

  // =========================
  // UI
  // =========================

  return (
    <div
      className="app-shell"
      id="top"
    >
      {/* =========================
          HEADER
      ========================= */}

      <Header
        jurisdiction={jurisdiction}
        setJurisdiction={changeJurisdiction}
        language={language}
        setLanguage={setLanguage}
        copy={copy}
      />

      {/* =========================
          MAIN CHAT LAYOUT
      ========================= */}

      <main className="chat-layout">

        {/* =========================
            CONVERSATION
        ========================= */}

        <section
          className="conversation"
          aria-label="IP-SAKTI conversation"
        >

          {/* =========================
              CASE BAR
          ========================= */}

          <div className="case-bar">

            <span>
              {copy.case}
            </span>

            <label>
              {copy.category}

              <select
                value={productType}
                onChange={(e) =>
                  setProductType(e.target.value)
                }
              >
                <option value="unknown">
                  {copy.select}
                </option>

                <option value="classical">
                  {copy.classical}
                </option>

                <option value="new-drug">
                  {copy.drug}
                </option>

                <option value="plant-research">
                  {copy.plant}
                </option>

                <option value="export">
                  {copy.export}
                </option>
              </select>
            </label>

            <b>
              01 <small>{copy.question}</small>

              <i>→</i>

              02 <small>{copy.evidence}</small>

              <i>→</i>

              03 <small>{copy.decision}</small>
            </b>

            {messages.length > 0 && (
              <button
                className="case-reset"
                onClick={newCase}
                type="button"
              >
                ↺ {copy.newCase}
              </button>
            )}

          </div>

          {/* =========================
              WELCOME SCREEN
          ========================= */}

          {messages.length === 0 && (
            <section className="welcome">

              {/* IP-SAKTI LOGO */}

              <img
                src="/ipsaktilogo.png"
                alt="IP-SAKTI Logo"
                className="welcome-seal"
              />

              {/* EYEBROW */}

              <span className="eyebrow">
                {jurisdiction === 'india'
                  ? copy.eyebrowIndia
                  : copy.eyebrowGlobal}
              </span>

              {/* TITLE */}

              <h1>
                {jurisdiction === 'india'
                  ? copy.titleIndia
                  : copy.titleGlobal}
              </h1>

              {/* INTRO */}

              <p>
                {jurisdiction === 'india'
                  ? copy.introIndia
                  : copy.introGlobal}
              </p>

              {/* TRUST FEATURES */}

              <div className="trust-row">

                <span>
                  ✦ {copy.evidenceFirst}
                </span>

                <span>
                  ◉ {copy.confidence}
                </span>

                <span>
                  ⌁ {copy.noGuess}
                </span>

              </div>

              {/* SUGGESTED QUESTIONS */}

              <SuggestedQuestions
                onSelect={choose}
                language={language}
              />

            </section>
          )}

          {/* =========================
              MESSAGE THREAD
          ========================= */}

          <div className="message-thread">

            {messages.map((message, index) => (
              <MessageBubble
                key={index}
                message={message}
                onFollowUp={focusQuestion}
                followUpLabel={copy.followUp}
              />
            ))}

          </div>

          {/* =========================
              LOADING
          ========================= */}

          {loading && (
            <div className="typing">

              <span>
                <i />
                <i />
                <i />
              </span>

              {copy.loading}

            </div>
          )}

          {/* =========================
              ERROR
          ========================= */}

          {error && (
            <section
              className="error-card"
              role="alert"
            >

              <strong>
                {copy.error}
              </strong>

              <span>
                {copy.errorHelp}
              </span>

              <button
                onClick={send}
                type="button"
              >
                {copy.retry}
              </button>

            </section>
          )}

          {/* Scroll Anchor */}

          <div ref={endRef} />

          {/* =========================
              QUESTION FORM
          ========================= */}

          <form
            className="question-form"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >

            <label
              className="sr-only"
              htmlFor="question"
            >
              Ask your IP question
            </label>

            <span className="prompt-icon">
              ⌕
            </span>

            <textarea
              id="question"
              value={question}
              onChange={(e) =>
                setQuestion(e.target.value)
              }
              onKeyDown={(e) => {
                if (
                  e.key === 'Enter' &&
                  !e.shiftKey
                ) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder={copy.placeholder}
              rows="1"
              disabled={loading}
            />

            <button
              disabled={
                loading ||
                !question.trim()
              }
              type="submit"
            >
              {copy.analyse}

              <span>
                ↗
              </span>
            </button>

          </form>

          {/* =========================
              CHAT FOOTER
          ========================= */}

          <div className="chat-footer">

            <p className="disclaimer">

              <strong>
                {copy.disclaimer}
              </strong>{' '}

              {copy.disclaimerRest}

            </p>

            <button
              className="escalate"
              onClick={() => setModal(true)}
              type="button"
            >
              {copy.expert}
            </button>

          </div>

        </section>

        {/* =========================
            CITATION PANEL
        ========================= */}

        <CitationPanel
          sources={sources}
          copy={copy}
        />

      </main>

      {/* =========================
          EXPERT REVIEW MODAL
      ========================= */}

      {modal && (
        <div
          className="modal-backdrop"
          onMouseDown={() => setModal(false)}
        >

          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            onMouseDown={(e) =>
              e.stopPropagation()
            }
          >

            <span className="eyebrow">
              EXPERT REVIEW
            </span>

            <h2>
              {copy.expertTitle}
            </h2>

            <p>
              {copy.expertText}
            </p>

            <button
              onClick={() => setModal(false)}
              type="button"
            >
              {copy.continue}
            </button>

          </section>

        </div>
      )}

    </div>
  );
}
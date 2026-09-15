export default function Header({ jurisdiction, setJurisdiction, language, setLanguage, copy }) {
  return <header className="app-header"><a className="brand" href="#top"><img
  src="/ipsaktilogo.png"
  alt="IP-SAKTI Logo"
  className="brand-logo"
/><span><strong>IP-SAKTI</strong><small>{copy.brandSub}</small></span></a><div className="header-controls"><span className="system-status"><i /> {copy.evidenceMode}</span><div className="jurisdiction-toggle" aria-label="Jurisdiction"><button className={jurisdiction === 'india' ? 'active' : ''} onClick={() => setJurisdiction('india')}>🇮🇳 {copy.india}</button><button className={jurisdiction === 'international' ? 'active' : ''} onClick={() => setJurisdiction('international')}>◌ {copy.global}</button></div><label className="language-select"><span className="sr-only">Language</span><select value={language} onChange={(e) => setLanguage(e.target.value)} aria-label="Language"><option value="en">EN</option><option value="hi">हि</option></select></label></div></header>;
}
// import logo from "../assets/ipsaktilogo.png";

function Navbar() {
  return (
<a className="brand" href="/">
  <img
    src="/ipsaktilogo.png"
    alt="IP-SAKTI Logo"
    className="brand-logo"
  />

  <div className="brand-info">
    <strong>IP-SAKTI</strong>
    <small>India's source-aware IP intelligence</small>
  </div>
</a>
  );
}


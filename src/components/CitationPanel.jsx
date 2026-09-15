// import { useState } from 'react';

// export default function CitationPanel({ sources, copy }) {
//   const [open, setOpen] = useState(0);
//   const hasSources = sources?.length > 0;
//   return <aside className="citation-panel" aria-label="Evidence workspace">
//     <div className="vault-top"><span className="vault-mark">✦</span><div><span className="eyebrow">{copy.vault}</span><strong>{copy.workspace}</strong></div></div>
//     <div className="evidence-tabs"><button className="active">{copy.sources} <em>{hasSources ? sources.length : 0}</em></button><button>{copy.trace}</button></div>
//     {!hasSources && <div className="empty-evidence"><span>⌁</span><h2>{copy.ready}</h2><p>{copy.readyText}</p><div><i /> {copy.noSource}</div></div>}
//     {hasSources && <><p className="evidence-note">{copy.traceText}</p>{sources.map((item, index) => <article className="source-card" key={item.id || index}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span className="source-icon">§</span><span><small>{copy.source} {String(index + 1).padStart(2, '0')}</small><strong>{item.source}</strong></span><b>{open === index ? '−' : '+'}</b></button>{open === index && <p>{item.text}</p>}</article>)}</>}
//   </aside>;
// }


import { useState } from 'react';

export default function CitationPanel({ sources = [], copy }) {
  const [activeTab, setActiveTab] = useState('sources');
  const [openSource, setOpenSource] = useState(0);

  const hasSources = sources.length > 0;

  const traceHeading =
    copy?.traceHeading || 'Evidence trail';

  const traceDescription =
    copy?.traceDescription ||
    'Trace the evidence used to support this response.';

  const answerLabel =
    copy?.traceAnswer || 'ANSWER';

  const answerSupported =
    copy?.traceSupported ||
    'Response supported by verified sources';

  const relevantPassage =
    copy?.relevantPassage || 'Relevant passage';

  const verifiedText =
    copy?.traceVerified ||
    'This evidence trail is based on the verified sources returned by IP-SAKTI.';

  function toggleSource(index) {
    setOpenSource(
      openSource === index ? -1 : index
    );
  }

  function changeTab(tab) {
    setActiveTab(tab);

    if (tab === 'sources' && hasSources) {
      setOpenSource(0);
    }

    if (tab === 'trace') {
      setOpenSource(-1);
    }
  }

  return (
    <aside
      className="citation-panel"
      aria-label="Evidence workspace"
    >

      {/* =================================
          HEADER
      ================================= */}

      <div className="vault-top">

        <span className="vault-mark">
          ✦
        </span>

        <div className="vault-heading">
          <span className="eyebrow">
            {copy.vault}
          </span>

          <strong>
            {copy.workspace}
          </strong>
        </div>

      </div>


      {/* =================================
          TABS
      ================================= */}

      <div className="evidence-tabs">

        <button
          type="button"
          className={
            activeTab === 'sources'
              ? 'active'
              : ''
          }
          onClick={() => changeTab('sources')}
        >
          <span>
            {copy.sources}
          </span>

          <em>
            {hasSources ? sources.length : 0}
          </em>
        </button>


        <button
          type="button"
          className={
            activeTab === 'trace'
              ? 'active'
              : ''
          }
          onClick={() => changeTab('trace')}
        >
          {copy.trace}
        </button>

      </div>


      {/* =================================
          EMPTY STATE
      ================================= */}

      {!hasSources && (
        <div className="empty-evidence">

          <span className="empty-icon">
            ⌁
          </span>

          <h2>
            {copy.ready}
          </h2>

          <p>
            {copy.readyText}
          </p>

          <div className="empty-note">
            <i />
            <span>
              {copy.noSource}
            </span>
          </div>

        </div>
      )}


      {/* =================================
          SOURCES TAB
      ================================= */}

      {hasSources &&
        activeTab === 'sources' && (
          <div className="sources-view">

            <div className="evidence-intro">
              <span className="intro-line" />
              <p>
                {copy.traceText}
              </p>
            </div>


            <div className="source-list">

              {sources.map((item, index) => {

                const isOpen =
                  openSource === index;

                return (
                  <article
                    className={`source-card ${
                      isOpen ? 'is-open' : ''
                    }`}
                    key={item.id || index}
                  >

                    {/* SOURCE HEADER */}

                    <button
                      type="button"
                      className="source-header"
                      onClick={() =>
                        toggleSource(index)
                      }
                      aria-expanded={isOpen}
                    >

                      <span className="source-symbol">
                        §
                      </span>

                      <span className="source-main">

                        <span className="source-number">
                          {copy.source}{' '}
                          {String(index + 1).padStart(
                            2,
                            '0'
                          )}
                        </span>

                        <strong className="source-name">
                          {item.source}
                        </strong>

                      </span>

                      <span className="source-toggle">
                        {isOpen ? '−' : '+'}
                      </span>

                    </button>


                    {/* SOURCE DETAILS */}

                    {isOpen && (
                      <div className="source-details">

                        <span className="passage-label">
                          {relevantPassage}
                        </span>

                        <p className="passage-text">
                          {item.text}
                        </p>

                      </div>
                    )}

                  </article>
                );
              })}

            </div>

          </div>
        )}


      {/* =================================
          TRACE TAB
      ================================= */}

      {hasSources &&
        activeTab === 'trace' && (
          <div className="trace-view">

            {/* TRACE HEADER */}

            <div className="trace-header-block">

              <div className="trace-heading-row">

                <span className="trace-heading-icon">
                  ⌁
                </span>

                <div>
                  <span className="trace-kicker">
                    TRACE
                  </span>

                  <h2>
                    {traceHeading}
                  </h2>
                </div>

              </div>

              <p>
                {traceDescription}
              </p>

            </div>


            {/* =================================
                EVIDENCE FLOW
            ================================= */}

            <div className="trace-flow">


              {/* ANSWER */}

              <div className="trace-item">

                <div className="trace-marker">
                  <span>01</span>
                </div>

                <div className="trace-card answer-card">

                  <div className="trace-card-top">

                    <span className="trace-label">
                      {answerLabel}
                    </span>

                    <span className="verified-badge">
                      ✓ VERIFIED
                    </span>

                  </div>

                  <h3>
                    {answerSupported}
                  </h3>

                </div>

              </div>


              {/* CONNECTOR */}

              <div className="trace-connector">
                <span>
                  supported by
                </span>
              </div>


              {/* SOURCES */}

              {sources.map((item, index) => (

                <div
                  className="trace-item"
                  key={item.id || index}
                >

                  <div className="trace-marker">
                    <span>
                      {String(index + 2).padStart(
                        2,
                        '0'
                      )}
                    </span>
                  </div>


                  <div className="trace-card source-trace-card">

                    <div className="trace-card-top">

                      <span className="trace-label">
                        {copy.source}{' '}
                        {String(index + 1).padStart(
                          2,
                          '0'
                        )}
                      </span>

                      <span className="source-status">
                        SOURCE
                      </span>

                    </div>


                    <h3>
                      {item.source}
                    </h3>


                    <div className="trace-passage">

                      <span>
                        {relevantPassage}
                      </span>

                      <p>
                        {item.text}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>


            {/* =================================
                VERIFIED FOOTER
            ================================= */}

            <div className="trace-verified">

              <span className="verified-icon">
                ✓
              </span>

              <p>
                {verifiedText}
              </p>

            </div>

          </div>
        )}

    </aside>
  );
}
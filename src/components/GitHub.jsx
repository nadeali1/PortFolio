import { useEffect, useState } from 'react';
import { C, INFO } from '../constants';
import { Section, SectionHeader, Card } from './UI';
import { GithubIcon, StarIcon } from './Icons';

const USERNAME = 'nadeali1';

export default function GitHub() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`),
        ]);
        if (!profileRes.ok || !reposRes.ok) throw new Error('GitHub API error');
        const [profileData, reposData] = await Promise.all([
          profileRes.json(),
          reposRes.json(),
        ]);
        setProfile(profileData);
        setRepos(reposData);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  // Gather language counts from repos
  const langCounts = {};
  repos.forEach(r => {
    if (r.language) langCounts[r.language] = (langCounts[r.language] || 0) + 1;
  });
  const topLangs = Object.entries(langCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const langColors = {
    JavaScript: C.muted, TypeScript: C.muted, Java: C.deep,
    Python: '#306998', 'C++': C.ash, C: C.ash,
    HTML: '#e34c26', CSS: '#563d7c', default: C.dark,
  };

  return (
    <Section id="github">
      <SectionHeader
        tag="GitHub"
        title="Open Source Activity"
        subtitle="A live look at my GitHub profile and public repositories."
      />

      {loading && <LoadingState />}
      {error && <ErrorState />}

      {!loading && !error && profile && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

          {/* Profile card */}
          <Card style={{ padding: '32px 32px' }} hover={false}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 24,
              flexWrap: 'wrap',
            }}>
              <img
                src={profile.avatar_url}
                alt="GitHub avatar"
                style={{
                  width: 72, height: 72, borderRadius: '50%',
                  border: `2px solid ${C.deep}`,
                  objectFit: 'cover',
                }}
              />
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 20, fontWeight: 700, color: C.ash,
                  }}>{profile.name || USERNAME}</h3>
                  <span style={{
                    fontSize: 12, color: C.muted,
                    fontFamily: "'JetBrains Mono', monospace",
                    background: `${C.deep}25`,
                    border: `1px solid ${C.deep}40`,
                    borderRadius: 5, padding: '2px 8px',
                  }}>@{profile.login}</span>
                </div>
                {profile.bio && (
                  <p style={{
                    fontSize: 14, color: `${C.ash}80`,
                    fontFamily: "'Inter', sans-serif", lineHeight: 1.6,
                  }}>{profile.bio}</p>
                )}
              </div>

              <div style={{
                display: 'flex', gap: 20, flexWrap: 'wrap',
              }}>
                {[
                  { label: 'Repos', value: profile.public_repos },
                ].map(({ label, value }) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <p style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 22, fontWeight: 700, color: C.ash, marginBottom: 2,
                    }}>{value}</p>
                    <p style={{
                      fontSize: 12, color: `${C.ash}60`,
                      fontFamily: "'Inter', sans-serif",
                      textTransform: 'uppercase', letterSpacing: 1,
                    }}>{label}</p>
                  </div>
                ))}
              </div>

              <a href={INFO.github} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: C.deep, color: C.ash,
                  border: 'none', borderRadius: 8,
                  padding: '10px 20px', fontSize: 14, fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: 'none', transition: 'background 0.2s',
                  flexShrink: 0,
                }}
                onMouseEnter={e => e.currentTarget.style.background = C.muted}
                onMouseLeave={e => e.currentTarget.style.background = C.deep}
              >
                <GithubIcon size={16} />
                View Profile
              </a>
            </div>
          </Card>

          {/* Languages used */}
          {topLangs.length > 0 && (
            <Card style={{ padding: '28px 28px' }} hover={false}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12, color: C.muted, letterSpacing: 4,
                textTransform: 'uppercase', marginBottom: 20,
              }}>Top Languages</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {topLangs.map(([lang, count]) => (
                  <div key={lang} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: `${C.charcoal}80`,
                    border: `1px solid ${C.dark}`,
                    borderRadius: 8, padding: '8px 16px',
                  }}>
                    <div style={{
                      width: 10, height: 10, borderRadius: '50%',
                      background: langColors[lang] || langColors.default,
                    }} />
                    <span style={{
                      fontSize: 13, color: C.ash,
                      fontFamily: "'Inter', sans-serif", fontWeight: 500,
                    }}>{lang}</span>
                    <span style={{
                      fontSize: 12, color: `${C.ash}55`,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}>{count}</span>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Repo cards */}
          {repos.length > 0 && (
            <div>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12, color: C.muted, letterSpacing: 4,
                textTransform: 'uppercase', marginBottom: 20,
              }}>Recent Repositories</p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 16,
              }}>
                {repos.map(repo => <RepoCard key={repo.id} repo={repo} langColors={langColors} />)}
              </div>
            </div>
          )}
        </div>
      )}
    </Section>
  );
}

function RepoCard({ repo, langColors }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'block', textDecoration: 'none',
        background: `${C.dark}55`,
        border: `1px solid ${hov ? C.deep + '70' : C.dark + '70'}`,
        borderRadius: 12, padding: '20px 20px',
        transition: 'all 0.2s',
        transform: hov ? 'translateY(-3px)' : 'none',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14, fontWeight: 600, color: hov ? C.muted : C.ash,
          transition: 'color 0.2s',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          maxWidth: '75%',
        }}>{repo.name}</p>
        {repo.stargazers_count > 0 && (
          <span style={{
            display: 'flex', alignItems: 'center', gap: 4,
            fontSize: 12, color: `${C.ash}70`,
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            <StarIcon size={12} />
            {repo.stargazers_count}
          </span>
        )}
      </div>
      {repo.description && (
        <p style={{
          fontSize: 12, color: `${C.ash}70`,
          fontFamily: "'Inter', sans-serif",
          lineHeight: 1.6, marginBottom: 12,
          display: '-webkit-box', WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>{repo.description}</p>
      )}
      {repo.language && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: langColors[repo.language] || C.dark,
          }} />
          <span style={{
            fontSize: 12, color: `${C.ash}70`,
            fontFamily: "'Inter', sans-serif",
          }}>{repo.language}</span>
        </div>
      )}
    </a>
  );
}

function LoadingState() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 0' }}>
      <div style={{
        width: 36, height: 36, border: `3px solid ${C.dark}`,
        borderTop: `3px solid ${C.muted}`,
        borderRadius: '50%', margin: '0 auto 16px',
        animation: 'spin 0.8s linear infinite',
      }} />
      <p style={{ color: `${C.ash}60`, fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
        Loading GitHub data…
      </p>
    </div>
  );
}

function ErrorState() {
  return (
    <Card style={{ padding: 32, textAlign: 'center' }} hover={false}>
      <p style={{ color: `${C.ash}70`, fontFamily: "'Inter', sans-serif", marginBottom: 16 }}>
        Couldn't load GitHub data. View profile directly:
      </p>
      <a href={INFO.github} target="_blank" rel="noopener noreferrer"
        style={{
          color: C.muted, fontFamily: "'Inter', sans-serif",
          fontWeight: 600, fontSize: 14,
        }}>
        github.com/nadealie1
      </a>
    </Card>
  );
}

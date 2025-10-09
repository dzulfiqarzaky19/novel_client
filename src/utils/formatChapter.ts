const NON_TERM = new Set([
  'mr.',
  'mrs.',
  'ms.',
  'dr.',
  'prof.',
  'sr.',
  'jr.',
  'st.',
  'mt.',
  'no.',
  'nos.',
  'vs.',
  'etc.',
  'e.g.',
  'i.e.',
  'fig.',
  'ref.',
]);

function endsWithNonTerminating(chunk: string, punct: string) {
  const tail = (chunk + punct).replace(/[”"')\]]+$/, '');
  const last = (tail.split(/\s+/).pop() || '').toLowerCase();

  return NON_TERM.has(last);
}

function isInitialsOrAcronym(tailWithPunct: string) {
  const tail = tailWithPunct.replace(/[”"')\]]+$/, '');

  return /(?:\b[A-Za-z]\.){1,}$/.test(tail);
}

function isLikelyDomain(chunk: string, nextPart: string) {
  const leftLabel = (chunk.match(/([a-z0-9-]{1,63})$/i) || [])[1];

  if (!leftLabel) return false;

  const right = (nextPart || '').trimStart();

  if (!/^[a-z]/.test(right)) return false;

  const tldMatch = right.match(/^([a-z]{2,24})(?:\b|[/?#&._-]|$)/);

  if (!tldMatch) return false;

  const tld = tldMatch[1];

  const common = new Set([
    'com',
    'net',
    'org',
    'io',
    'gov',
    'edu',
    'info',
    'biz',
    'me',
    'app',
    'site',
    'top',
    'shop',
    'online',
    'tech',
    'ai',
    'gg',
    'dev',
    'xyz',
    'tv',
    'fm',
    'to',
    'news',
    'media',
    'cloud',
    'co',
    'us',
    'uk',
    'de',
    'jp',
    'cn',
    'ru',
    'fr',
    'it',
    'es',
    'nl',
    'ca',
    'br',
    'kr',
    'se',
    'no',
    'dk',
    'pl',
    'tr',
    'in',
    'au',
    'nz',
    'id',
    'my',
    'sg',
    'ph',
    'th',
    'vn',
    'mx',
    'ar',
    'cl',
  ]);

  return common.has(tld) || (tld.length >= 2 && /^[a-z]+$/.test(tld));
}

export const formatChapter = (text: string): string[] => {
  const normalized = text.replace(/\s+/g, ' ').trim();

  const parts = normalized.split(/([.?!][”"')\]]?)/g);
  const sentences: string[] = [];

  for (let i = 0; i < parts.length; i += 2) {
    const chunk = (parts[i] || '').trim();
    const punct = parts[i + 1] || '';
    const next = parts[i + 2] || '';

    if (!chunk) continue;

    const candidate = (chunk + punct).trim();

    let skipSplit = false;

    if (punct.startsWith('.')) {
      if (endsWithNonTerminating(chunk, punct)) skipSplit = true;

      if (!skipSplit && isInitialsOrAcronym(chunk + punct)) skipSplit = true;

      if (!skipSplit && isLikelyDomain(chunk, next)) skipSplit = true;
    }

    if (skipSplit) {
      parts[i + 2] = `${(parts[i + 2] || '').trimStart()}`;

      parts[i] = `${candidate} ${parts[i + 2] || ''}`;

      parts[i + 1] = '';

      continue;
    }

    sentences.push(candidate);
  }

  return sentences;
};

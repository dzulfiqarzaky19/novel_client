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

function isDecimal(s: string, dotIdx: number) {
  const prev = s[dotIdx - 1],
    next = s[dotIdx + 1];

  return /\d/.test(prev || '') && /\d/.test(next || '');
}

function isInitialsOrAcronym(fragment: string) {
  return /(?:\b[A-Za-z]\.){1,}\s*$/.test(fragment);
}

function endsWithNonTerminating(fragment: string) {
  const m = fragment.match(/([A-Za-z.]+)\s*$/);

  return !!m && NON_TERM.has(m[1].toLowerCase());
}

function spaceAfterPeriod(text: string) {
  return text.replace(/\.([A-Za-z(])/g, '. $1');
}

function splitSentences(text: string): string[] {
  const t = text
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .trim();

  const out: string[] = [];
  let start = 0;
  const re = /([.?!])([”"')\]]*)(\s+|$)/g;
  let m: RegExpExecArray | null;

  while ((m = re.exec(t))) {
    const punctIdx = m.index;
    const punct = m[1];
    const before = t.slice(start, punctIdx + 1);

    if (punct === '.') {
      if (
        isDecimal(t, punctIdx) ||
        isInitialsOrAcronym(before) ||
        endsWithNonTerminating(before)
      ) {
        continue;
      }
    }

    const closing = m[2] ?? '';
    const sentence = (t.slice(start, punctIdx + 1) + closing).trim();

    out.push(sentence);

    start = re.lastIndex;
  }

  const tail = t.slice(start).trim();

  if (tail) out.push(tail);

  return out.map((s) => s.replace(/[ \t]{2,}/g, ' '));
}

function groupSentences(sentences: string[], per = 3): string[] {
  const paras: string[] = [];

  for (let i = 0; i < sentences.length; i += per) {
    paras.push(sentences.slice(i, i + per).join(' '));
  }

  return paras;
}

export function formatDescriptionToParagraphs(raw: string, per = 3): string[] {
  const normalized = spaceAfterPeriod(raw);
  const sentences = splitSentences(normalized);

  return groupSentences(sentences, per);
}

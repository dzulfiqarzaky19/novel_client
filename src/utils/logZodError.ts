/* eslint-disable no-console */
// these exist on some codes like invalid_type
import { type ZodIssue } from 'zod';

export function logZodError(issues: ZodIssue[]) {
  console.group('Zod Validation Errors:');

  issues.forEach((issue) => {
    console.group(`Error at path: ${issue.path.join('.')}`);

    console.log('Error code:', issue.code);

    console.log('Message:', issue.message);

    if ('expected' in issue) {
      console.log('Expected:', issue.expected);
    }

    if ('received' in issue) {
      console.log('Received:', issue.received);
    }

    console.groupEnd();
  });

  console.groupEnd();
}

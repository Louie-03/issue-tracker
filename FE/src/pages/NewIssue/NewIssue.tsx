<<<<<<< HEAD
import React from 'react';

function NewIssue(): JSX.Element {
  return <div />;
}
export default NewIssue;
=======
import { NewIssueForm } from 'common/NewIssueForm/NewIssueForm';

export function NewIssue() {
  return <NewIssueForm isTitle={false} isActive={false} />;
}
>>>>>>> 655a1dd8c6efa1753bc10a5273b5ceec1a86cb66

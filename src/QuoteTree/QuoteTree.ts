import * as vscode from 'vscode';

class QuoteTree extends vscode.TreeItem {
  constructor(label: string) {
    super(label);
  }
}

export default QuoteTree;

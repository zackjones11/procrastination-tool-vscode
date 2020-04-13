import * as vscode from 'vscode';
import { QuoteTree } from './';
import { fetchQuote } from '../services';

export class QuoteTreeProvider implements vscode.TreeDataProvider<QuoteTree> {
  public async getChildren(): Promise<QuoteTree[]> {
    return [new QuoteTree(await fetchQuote())];
  }

  getTreeItem(item: QuoteTree): vscode.TreeItem {
    return item;
  }
}

export default QuoteTreeProvider;

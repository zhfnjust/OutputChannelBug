// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
let testOutputChannel: vscode.OutputChannel = vscode.window.createOutputChannel('ss');

export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "scrypttest" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('scrypttest.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from scrypttest!');
	});


	vscode.commands.registerCommand('scrypt.test.run', (uri) => {

		if(uri) {
			//executeCommandRunTest(uri.fsPath, testOutputChannel, true);
			//testOutputChannel.clear();
			testOutputChannel.show(true);
			testOutputChannel.appendLine(`Start running sCrypt test in :`);

	
		}
	})


	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

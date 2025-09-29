export interface PracticeCase {
	id: number;
	title: string;
	subtitle: string;
	mainContent: React.ReactNode;
	resultText: string;
	clientRequest: string;
	ourActions: string;
	documentScanUrl?: string;
}
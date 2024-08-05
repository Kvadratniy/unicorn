export {};

declare global {
  interface ColStruct {
		header: string,
		cell: {
			name: string,
			fields: Record<string, string>,
		}
	}
}
import { defineConfig } from "cypress";
let scaleValues;

export default defineConfig({
  projectId: '2pzn9i',
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
			on("task", {
				set_scaleValues: (val) => {
					return (scaleValues = val);
				},
				get_scaleValues: () => {
					return scaleValues;
				}
			});
		}
	}
});

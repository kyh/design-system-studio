import * as fs from "fs";
import * as path from "path";
import { Command, flags } from "@oclif/command";
import cli from "cli-ux";

export interface ComponentStyles {
  button: Record<string, string>;
  text: Record<string, string>;
}

const templates = ["react-styled-components", "react-emotion"];

export default class Generate extends Command {
  static description = `scaffold a component library from your ComponentStyles interface`;
  static usage = `generate [INTERFACE_PATH] -t=[TEMPLATE]`;
  static examples = [
    `proto generate examples/components.json -t=${templates[0]}`,
  ];

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    force: flags.boolean({ char: "f" }),
    // flag with a value (-t, --t=VALUE)
    template: flags.string({
      char: "t",
      description: `Template to use in order to generate your component library. Should be one of: [${templates.join(
        " | "
      )}]`,
    }),
    outputPath: flags.string({
      char: "o",
      description: `Output folder for your component library`,
    }),
  };

  static args = [
    {
      name: "interface_path",
      description: "ComponentStyles interface to use. Should be a .json file",
      required: true,
    },
  ];

  async run() {
    const cwd = process.cwd();
    const { args, flags } = this.parse(Generate);
    let { template, outputPath } = flags;
    if (!template) {
      template = templates[0];
      this.log(`No template specified, defaulting to [${templates[0]}]`);
    }
    if (!outputPath) {
      outputPath = `${cwd}/components`;
      this.log(`No output path specified, defaulting to [${outputPath}]`);
    }

    cli.action.start("Parsing component interface");
    const jsonString = fs.readFileSync(path.join(cwd, args.interface_path));
    const componentStyles: ComponentStyles = JSON.parse(jsonString.toString());
    cli.action.stop();

    cli.action.start(
      `Scaffolding components [${Object.keys(componentStyles).join(" | ")}]`
    );
    cli.action.stop();
  }
}

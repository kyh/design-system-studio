import * as fs from "fs";
import * as path from "path";
import { Command, flags } from "@oclif/command";
import cli from "cli-ux";

interface ComponentStylesApi {
  button: Record<string, string>;
  text: Record<string, string>;
}

const templates = ["react-styled-components", "react-emotion"];
class Proto extends Command {
  static description = `
Proto - A component library generator

CLI tool to scaffold a component library from a simple JSON interface.
`;

  static usage = `@dsstudio/proto [interface.json] -t=[${templates[0]}]`;

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    force: flags.boolean({ char: "f" }),
    // flag with a value (-t, --t=VALUE)
    template: flags.string({
      char: "t",
      description: `Template to generate your component library with. Should be one of: [${templates.join(
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
      name: "interfacePath",
      description: "Component styles interface to use. Should be a .json file",
      required: true,
    },
  ];

  async run() {
    const cwd = process.cwd();
    const { args, flags } = this.parse(Proto);
    let { template, outputPath } = flags;
    if (!template) {
      template = templates[0];
      this.log(`No template specified, defaulting to [${templates[0]}]`);
    }
    if (!outputPath) {
      outputPath = `${cwd}/lib`;
      this.log(`No output path specified, defaulting to [${outputPath}]`);
    }

    cli.action.start("Parsing component interface");
    const jsonString = fs.readFileSync(path.join(cwd, args.interfacePath));
    const componentStyles: ComponentStylesApi = JSON.parse(
      jsonString.toString()
    );
    cli.action.stop();

    cli.action.start(
      `Scaffolding components [${Object.keys(componentStyles).join(" | ")}]`
    );
    cli.action.stop();
  }
}

export = Proto;

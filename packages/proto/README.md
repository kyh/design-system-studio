Proto - A component library generator
=====

[![Version](https://img.shields.io/npm/v/@dsstudio/proto.svg)](https://npmjs.org/package/@dsstudio/proto)
[![Downloads/week](https://img.shields.io/npm/dw/@dsstudio/proto.svg)](https://npmjs.org/package/@dsstudio/proto)
[![License](https://img.shields.io/npm/l/@dsstudio/proto.svg)](https://github.com/tehkaiyu/proto/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Component Interface](#component-interface)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @dsstudio/proto
$ proto COMMAND
running command...
$ proto (-v|--version|version)
@dsstudio/proto/0.0.5 darwin-x64 node-v15.2.1
$ proto --help [COMMAND]
USAGE
  $ proto COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
```
USAGE
  $ proto @dsstudio/proto [interface.json] -t=[react-styled-components]

ARGUMENTS
  INTERFACEPATH  Component styles interface to use. Should be a .json file

OPTIONS
  -f, --force
  -h, --help                   show CLI help
  -o, --outputPath=outputPath  Output folder for your component library
  -t, --template=template      Template to generate your component library with. Should be one of: [react-styled-components | react-emotion]
  -v, --version                show CLI version

DESCRIPTION
  CLI tool to scaffold a component library from a simple JSON interface

EXAMPLE
  @dsstudio/proto examples/components.json -t=react-styled-components
```
<!-- commandsstop -->

# Component Interface

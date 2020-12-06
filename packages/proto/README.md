Proto - A component library generator
=====

[![Version](https://img.shields.io/npm/v/@dsstudio/proto.svg)](https://npmjs.org/package/@dsstudio/proto)
[![Downloads/week](https://img.shields.io/npm/dw/@dsstudio/proto.svg)](https://npmjs.org/package/@dsstudio/proto)
[![License](https://img.shields.io/npm/l/@dsstudio/proto.svg)](https://github.com/tehkaiyu/proto/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Quick Start](#quick-start)
* [Commands](#commands)
* [Available Templates](#available-templates)
* [ComponentStyles Interface](#componentstyles-interface)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @dsstudio/proto
$ proto COMMAND
running command...
$ proto (-v|--version|version)
@dsstudio/proto/0.0.12 darwin-x64 node-v15.2.1
$ proto --help [COMMAND]
USAGE
  $ proto COMMAND
...
```
<!-- usagestop -->

# Quick Start
_to be completed_

# Commands
<!-- commands -->
* [`proto commands`](#proto-commands)
* [`proto generate [INTERFACE_PATH] -t=[TEMPLATE]`](#proto-generate-interface_path--ttemplate)
* [`proto help [COMMAND]`](#proto-help-command)
* [`proto update [CHANNEL]`](#proto-update-channel)

## `proto commands`

```
USAGE
  $ proto commands

OPTIONS
  -h, --help              show CLI help
  -j, --json              display unfiltered api data in json format
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --hidden                show hidden commands
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v1.3.0/src/commands/commands.ts)_

## `proto generate [INTERFACE_PATH] -t=[TEMPLATE]`

```
USAGE
  $ proto generate [INTERFACE_PATH] -t=[TEMPLATE]

ARGUMENTS
  INTERFACE_PATH  ComponentStyles interface to use. Should be a .json file

OPTIONS
  -f, --force
  -h, --help                   show CLI help
  -o, --outputPath=outputPath  Output folder for your component library

  -t, --template=template      Template to use in order to generate your component library. Should be one of:
                               [react-styled-components | react-emotion]

  -v, --version                show CLI version

EXAMPLE
  proto generate examples/components.json -t=react-styled-components
```

_See code: [build/commands/generate.ts](https://github.com/tehkaiyu/design-system-studio/blob/v0.0.12/build/commands/generate.ts)_

## `proto help [COMMAND]`

```
USAGE
  $ proto help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `proto update [CHANNEL]`

```
USAGE
  $ proto update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.10/src/commands/update.ts)_
<!-- commandsstop -->

# Available Templates
_to be completed_

# ComponentStyles Interface
_to be completed_

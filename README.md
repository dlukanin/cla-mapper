# cla-mapper
[![Build Status](https://travis-ci.org/dlukanin/cla-mapper.svg?branch=master)](https://travis-ci.org/dlukanin/cla-mapper)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/dlukanin/cla-mapper.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/dlukanin/cla-mapper/alerts/)

A small library that processes js object and returns ready for use array of command line args.

## Install

`npm i cla-mapper`

## Use

```
import {ClaMapper} from 'cla-mapper';

const mapper = new ClaMapper({
    opt1: '-o',
    opt2: '--opt2'
    opt3: '--opt3'
});

mapper.getCommandLineArgs({
    opt1: 'val',
    opt2: true,
    opt3: false
}); // ['-o', 'val', '--opt2']
```

## License
Lib is MIT licensed

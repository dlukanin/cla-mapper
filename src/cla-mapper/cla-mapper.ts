import {IClaMapper} from './cla-mapper.interface';

export class ClaMapper implements IClaMapper {

    public get commandLineArgsMap(): Record<string, string> {
        return this._commandLineArgsMap;
    }

    public set commandLineArgsMap(val: Record<string, string>) {
        this._commandLineArgsMap = val;
    }

    private _commandLineArgsMap: Record<string, string>;

    constructor(commandLineArgsMap: Record<string, string>) {
        this._commandLineArgsMap = commandLineArgsMap;
    }

    public getCommandLineArgs(obj: any): string[] {
        const args = [];

        Object.entries(obj).forEach((entry) => {
            const key = entry[0];
            const value = entry[1];

            const arg = this._commandLineArgsMap[key];

            if (arg) {
                const type = typeof value;

                if (type === 'boolean') {
                    if (value) {
                        args.push(arg);
                    }
                } else if (type === 'string' || type === 'number') {
                    args.push(arg);
                    args.push(value.toString());
                }
            }
        });

        return args;
    }
}
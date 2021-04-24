export interface IClaMapper {
    commandLineArgsMap: Record<string, string>;

    getCommandLineArgs(obj: Record<string, boolean | string | number>): string[];
}
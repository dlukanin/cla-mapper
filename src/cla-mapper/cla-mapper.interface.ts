export interface IClaMapper {
    commandLineArgsMap: Record<string, string>;

    getCommandLineArgs(obj: any): string[];
}
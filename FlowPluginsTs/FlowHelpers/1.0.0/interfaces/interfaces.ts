import { IFileObject, Istreams } from './synced/IFileObject';
import Ijob from './synced/jobInterface';

export interface IpluginInputUi {
    type: 'dropdown' | 'text' | 'textarea' | 'directory',
    options?: string[],
    style?:Record<string, unknown>,
    onSelect?: {
        'hevc': {
          update: {
            quality: '28',
          },
        }
      },
}

export interface IpluginInputs {
    name: string,
    type: 'string' | 'boolean' | 'number',
    defaultValue: string,
    inputUI: IpluginInputUi,
    tooltip: string,
}

export interface IpluginDetails {
    name: string,
    nameUI?:{
        type: 'text' | 'textarea',
        style?:Record<string, unknown>,
    }
    description: string,
    style: {
        borderColor: string,
        opacity?: number,
        borderRadius?: number | string,
        width?: number | string,
        height?: number | string,
        backgroundColor?: string,
    },
    tags: string,
    isStartPlugin: boolean,
    pType: 'start' | 'onFlowError' | '',
    sidebarPosition: number,
    icon: string,
    inputs: IpluginInputs[],

    outputs: {
        number: number,
        tooltip: string,
    }[],
    requiresVersion: string,
}

export interface Ilog {
    (text: string): void
}

export interface IupdateWorker {
    (obj: Record<string, unknown>): void,
}

export interface IffmpegCommandStream extends Istreams {
    removed: boolean,
    forceEncoding: boolean,
    inputArgs: string[],
    outputArgs: string[],
}

export interface IffmpegCommand {
    inputFiles: string[],
    streams: IffmpegCommandStream[]
    container: string,
    hardwareDecoding: boolean,
    shouldProcess: boolean,
    overallInputArguments: string[],
    overallOuputArguments: string[],
}

export interface Ivariables {
    ffmpegCommand: IffmpegCommand
}

export interface IpluginOutputArgs {
    outputNumber: number,
    outputFileObj: {
        _id: string,
    },
    variables: Ivariables
}

export interface IpluginInputArgs {
    inputFileObj: IFileObject,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    librarySettings: any,
    inputs: Record<string, unknown>,
    jobLog: Ilog,
    workDir: string,
    platform: string,
    arch: string,
    handbrakePath: string,
    ffmpegPath: string,
    mkvpropeditPath: string,
    originalLibraryFile: IFileObject,
    nodeHardwareType: string,
    workerType: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    config: any,
    job: Ijob,
    platform_arch_isdocker: string,
    variables: Ivariables,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lastSuccesfulPlugin: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lastSuccessfulRun: any,
    updateWorker: IupdateWorker,
    logFullCliOutput: boolean,
    logOutcome: (outcome: string) => void,
    deps: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fsextra: any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        parseArgsStringToArgv: any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        importFresh(path: string): any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        axiosMiddleware: (endpoint: string, data: Record<string, unknown>) => Promise<any>,
        requireFromString: (pluginText: string, relativePath: string) => Record<string, unknown>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        upath: any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        gracefulfs: any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mvdir: any,
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
        axios: any,
    },
    installClassicPluginDeps: (deps: string[]) => void,
}

export interface IflowTemplate {
    name: string,
    description: string,
    tags: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    flowPlugins:any[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    flowEdges: any[],
}

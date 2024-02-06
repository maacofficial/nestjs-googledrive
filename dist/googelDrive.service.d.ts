/// <reference types="multer" />
import { GoogleDriveConfig } from './types';
export declare class GoogleDriveService {
    private config;
    private googleDriveFolderId;
    private drive;
    constructor(config: GoogleDriveConfig, googleDriveFolderId: string);
    uploadData(file: Express.Multer.File): Promise<string>;
    getData(fileId: string): Promise<string>;
}

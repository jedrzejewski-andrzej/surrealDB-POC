import {CreateService} from './create.service';
import {ReadService} from './read.service';
import {UpdateService} from './update.service';
import {DeleteService} from './delete.service';

export const CRUD_SERVICES: any[] = [CreateService, ReadService, UpdateService, DeleteService];
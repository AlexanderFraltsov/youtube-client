import { AddCard } from './custom.actions';
import { UpdateCards } from './youtube.actions';

export type Actions = UpdateCards & AddCard;

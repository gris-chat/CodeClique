import { Injectable, signal } from '@angular/core';

export interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private nextId = 0;

  // Un "signal" est une variable qu'Angular surveille :
  // quand elle change, l'affichage se met à jour tout seul.
  readonly notifications = signal<Notification[]>([]);

  show(message: string, type: 'success' | 'error' | 'info' = 'success', duration = 3000) {
    const id = this.nextId++;
    this.notifications.update(list => [...list, { id, message, type }]);
    if (duration > 0) setTimeout(() => this.dismiss(id), duration);
    return id;
  }

  update(id: number, message: string, type: 'success' | 'error' | 'info', duration = 3000) {
    this.notifications.update(list =>
      list.map(notification => notification.id === id ? { ...notification, message, type } : notification)
    );
    if (duration > 0) setTimeout(() => this.dismiss(id), duration);
  }

  dismiss(id: number) {
    this.notifications.update(list => list.filter(n => n.id !== id));
  }
}
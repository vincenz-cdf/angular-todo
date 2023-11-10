export class Task {
  id: number;
  title: string;
  editing: boolean = false;  // New field

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}

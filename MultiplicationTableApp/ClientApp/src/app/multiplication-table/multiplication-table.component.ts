import { Component, OnInit } from '@angular/core';
import { MultiplicationTableService } from '../multiplication-table.service';

@Component({
  selector: 'app-multiplication-table',
  templateUrl: './multiplication-table.component.html',
  styleUrls: ['./multiplication-table.component.css']
})
export class MultiplicationTableComponent implements OnInit {
  number: number | null = null;
  table: number[] = [];
  entries: any[] = [];
  errorMessage: string | null = null;

  constructor(private multiplicationTableService: MultiplicationTableService) { }

  ngOnInit(): void {
    this.loadEntries();
  }

  loadEntries(): void {
    this.multiplicationTableService.getEntries().subscribe({
      next: (data) => this.entries = data,
      error: (error) => console.error(error)
    });
  }

  generateTable(): void {
    this.errorMessage = null;

    if (this.number === null || this.number <= 0 || !Number.isInteger(this.number)) {
      this.errorMessage = "Invalid input. Please enter a positive integer.";
      return;
    }

    this.multiplicationTableService.addEntry(this.number).subscribe({
      next: () => {
        this.table = Array.from({ length: 10 }, (_, i) => (i + 1) * this.number!);
        this.loadEntries();
      },
      error: (error) => {
        this.errorMessage = error.error;
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataService } from '../data.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit{
  genres:String[]|undefined = undefined;
  bgColor:any = "#";
  letters = '0123456789ABCDEF';
  selectedGenre:String|undefined = undefined;
  songs:String[]|undefined = undefined;
  constructor(private dataService:DataService) {}
  ngOnInit(): void {
    this.dataService.getAllGenres().subscribe(data => this.genres = data);
  }
  getGenreName(genre:String) {
    return genre.split("resource/")[1].replaceAll("_"," ");
  }
  getRandomColor() {
    this.bgColor = '#'; // <-----------
    for (var i = 0; i < 6; i++) {
        this.bgColor += this.letters[Math.floor(Math.random() * 10)];
    }
    return this.bgColor;
  }
  setSongs(genre:any) {
    this.selectedGenre = genre;
    this.dataService.getSongs(genre).subscribe(data => this.songs = data);
  }




}

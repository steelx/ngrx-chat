import { Component, OnInit } from '@angular/core';
import {ThreadsService} from "../services/threads.service";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../store/application-state";

@Component({
  selector: 'app-message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

  constructor(private threadsService: ThreadsService,
              private store: Store<ApplicationState>) {
    store.subscribe(
      state => console.log('MessageSectionComponent received ', state)
    );
  }

  ngOnInit() {
  }

}

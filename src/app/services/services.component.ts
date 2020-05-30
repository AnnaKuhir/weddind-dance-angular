import { Component, OnInit, Output } from '@angular/core';
import { Section, Content } from '../models/section.model';

import { HeaderService } from '../header/services/header-service';

@Component(
    {
        selector: 'app-services',
        templateUrl: './services.component.html',
        styleUrls: ['./services.component.scss']
    }
)
export class ServicesComponent implements OnInit {
    @Output() content: Content;

    constructor(private headerService: HeaderService) { }

    ngOnInit(): void {
        this.headerService.getSection().subscribe((sections: Section) => {
            if (sections) {
                this.content = sections.content[0];
            }
        });

    }
}

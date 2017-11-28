/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContatoModelService } from './contato-model.service';

describe('ContatoModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContatoModelService]
    });
  });

  it('should ...', inject([ContatoModelService], (service: ContatoModelService) => {
    expect(service).toBeTruthy();
  }));
});

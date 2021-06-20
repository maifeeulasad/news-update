import { TestBed } from '@angular/core/testing';

import { RedditNewsService } from './reddit-news.service';

describe('RedditNewsService', () => {
  let service: RedditNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedditNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

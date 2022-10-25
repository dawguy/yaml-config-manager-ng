import { TestBed } from '@angular/core/testing';

import { YamlService } from './yaml.service';

describe('YamlService', () => {
  let service: YamlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YamlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('JSON can be parsed', () => {
    const data = {
      "name": "serviceAStaging",
      "database": {
        "username": "databaseUser",
        "password": "databasePassword",
        "connection": {
          "url": "databaseIP,databaseIP2",
          "port": 4567
        }
      },
      "serviceA": {
        "name": "Service Alpha",
        "deploymentType": "NPE"
      },
      "featureA": {
        "enabled": true
      },
      "featureB": {
        "url": "featureBURL",
        "enabled": true
      }
    };

    const val = service.parse(data);
    console.log(val);
  })
});

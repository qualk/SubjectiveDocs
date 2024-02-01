# SubjectiveKit Schools

**SubjectiveKit Schools** is the our library of school data for Subjective for Web and Subjective on Apple platforms.

The data is served as JavaScript Object Notation (JSON) from [https://cdn.subjective.school/schools.json](https://cdn.subjective.school/schools.json). The source code can be found [here](https://github.com/SubjectiveLabs/SubjectiveKit/blob/main/schools.json).

The format of this data can be found in the `sj` source code [here](https://github.com/SubjectiveLabs/sj), and described below. Other properties may be featured in formats and implementations using this data (such as the Subjective data file format) which SubjectiveKit does not provide, and are not listed here.

## `schools.json`

The data is stored as an **array of `School` objects**, each of which has the following properties:

| Property      | Type [^1] | Description                                                                                                          |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------------------- |
| `name`        | `string`  | The name of the school. This should be unique within the `School` array.                                             |
| `bellTimes`   | `array`   | An array of `BellTime` objects, whose format is described [below](#belltime).                                        |
| `links`       | `array`   | An array of `Link` objects, whose format is described [below](#link).                                                |
| `location`    | `string`  | The location of the school. This should be in the format `<suburb>, <state>`.                                        |
| `longitude`   | `number`  | The longitude of the school.                                                                                         |
| `latitude`    | `number`  | The latitude of the school.                                                                                          |
| `notices`     | `array`   | An array of `Notice` objects. **SubjectiveKit does not provide any notices**, instead storing an empty array (`[]`). |
| `userCreated` | `boolean` | Whether the school was created by a user. This controls whether the school can be edited.                            |
| `version`     | `string`  | The version of the file format. This is currently unused and hardcoded as `1.1`.                                     |

### BellTime

A `BellTime` represents the instant of time when a bell rings, and normally corresponds to a period of time from that instant to the next bell. It has the following properties:

| Property  | Type [^1] | Description                                                   |
| --------- | --------- | ------------------------------------------------------------- |
| `name`    | `string`  | The name of the bell time.                                    |
| `hour`    | `number`  | The hour of the bell time. This should be between 0 and 23.   |
| `minute`  | `number`  | The minute of the bell time. This should be between 0 and 59. |
| `enabled` | `boolean` | Whether the bell time is enabled. This defaults to `true`.    |

### Link

A `Link` represents a link to a website that students can access from a user interface quickly. It has the following properties:

| Property      | Type [^1] | Description                                                       |
| ------------- | --------- | ----------------------------------------------------------------- |
| `title`       | `string`  | The displayed name of the link.                                   |
| `icon`        | `string`  | The icon identifier as stated in Apple's SF Symbols icon library. |
| `destination` | `string`  | The destination URL of the link.                                  |

[^1]: The type of the property as described in [RFC 8259, section 3](https://datatracker.ietf.org/doc/html/rfc8259#section-3).

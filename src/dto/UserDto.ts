export class UserDto {
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly email: string;
  readonly phone: string;
  readonly birthday: string;
  readonly createDateTime: Date;
  readonly createdBy: string;
  readonly lastChangedDateTime: Date;
  readonly lastChangedBy: string;
}

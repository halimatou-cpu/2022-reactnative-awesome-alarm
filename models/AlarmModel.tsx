export class AlarmModel{
	public id: string;
	public hour: number;
	public minute: number;
	public title: string;
	public recurring: boolean;
	public monday: boolean;
	public tuesday: boolean;
	public wednesday: boolean;
	public thursday: boolean;
	public friday: boolean;
	public saturday: boolean;
	public sunday: boolean;

	constructor(data: any){
		this.id = data.id;
		this.hour = data.hour;
		this.minute = data.minute;
		this.title = data.title;
		this.recurring = data.recurring;
		this.monday = data.monday;
		this.tuesday = data.tuesday;
		this.wednesday = data.wednesday;
		this.thursday = data.thursday;
		this.friday = data.friday;
		this.saturday = data.saturday;
		this.sunday = data.sunday;
	}
}
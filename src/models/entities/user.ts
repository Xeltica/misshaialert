import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { AlertMode, alertModes } from '../../types/AlertMode';
import { visibilities, Visibility } from '../../types/Visibility';

@Entity()
@Index([ 'username', 'host' ], { unique: true })
export class User {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({
		type: 'varchar'
	})
	public username: string;

	@Column({
		type: 'varchar'
	})
	public host: string;

	@Column({
		type: 'varchar'
	})
	public token: string;

	@Column({
		type: 'varchar',
		default: ''
	})
	public misshaiToken: string;

	@Column({
		type: 'integer',
		default: 0,
	})
	public prevNotesCount: number;

	@Column({
		type: 'integer',
		default: 0,
	})
	public prevFollowingCount: number;

	@Column({
		type: 'integer',
		default: 0,
	})
	public prevFollowersCount: number;

	@Column({
		type: 'enum',
		enum: alertModes,
		default: 'notification'
	})
	public alertMode: AlertMode;

	@Column({
		type: 'enum',
		enum: visibilities,
		default: 'home',
	})
	public visibility: Visibility;

	@Column({
		type: 'boolean',
		default: false,
	})
	public localOnly: boolean;

	@Column({
		type: 'boolean',
		default: false,
	})
	public remoteFollowersOnly: boolean;

	@Column({
		type: 'varchar',
		length: 280,
		nullable: true,
	})
	public template: string | null;

	@Column({
		type: 'real',
		default: 0,
	})
	public prevRating: number;

	@Column({
		type: 'real',
		default: 0,
	})
	public rating: number;

	@Column({
		type: 'boolean',
		default: false,
	})
	public bannedFromRanking: boolean;
}
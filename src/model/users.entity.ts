import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({tableName: 'users'})
export class Users extends Model<Users> {
    @Column({
        type: DataType.UUID,
        allowNull: false,
        primaryKey: true,
    })
    id: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    username: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    phone: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    birthday: string;

    @Column({
        type: DataType.DATE,
        unique: true,
        allowNull: false,
    })
    createdAt: Date;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    createdBy: string;

    @Column({
        type: DataType.DATE,
        unique: true,
        allowNull: false,
    })
    updatedAt: Date;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    lastChangedBy: string;
}
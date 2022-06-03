import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({tableName: 'tasks'})
export class Tasks extends Model<Tasks> {
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
    title: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    description: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    date: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    hour: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    responsable: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    status: string;

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
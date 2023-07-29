use u688998899_logs;
show tables;

create table app_logs (logId int primary key auto_increment,eventType int,
userId nvarchar(250),description nvarchar(1000),
callStack nvarchar(1000),functionName nvarchar(250),
eventTime datetime,
moduleName nvarchar(100),machineName nvarchar(100));

drop table cceestudy_logs;
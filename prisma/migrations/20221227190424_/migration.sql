BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Client] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [fone] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Client_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIMEOFFSET,
    CONSTRAINT [Client_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Client_id_key] UNIQUE NONCLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Address] (
    [id] NVARCHAR(1000) NOT NULL,
    [street] NVARCHAR(1000) NOT NULL,
    [district] NVARCHAR(1000) NOT NULL,
    [number] NVARCHAR(1000) NOT NULL,
    [city] NVARCHAR(1000) NOT NULL,
    [clientId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Address_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIMEOFFSET,
    CONSTRAINT [Address_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Address_id_key] UNIQUE NONCLUSTERED ([id]),
    CONSTRAINT [Address_clientId_key] UNIQUE NONCLUSTERED ([clientId])
);

-- CreateTable
CREATE TABLE [dbo].[Loan] (
    [id] NVARCHAR(1000) NOT NULL,
    [value_loan] INT NOT NULL,
    [clientId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Loan_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIMEOFFSET,
    CONSTRAINT [Loan_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Loan_id_key] UNIQUE NONCLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Address] ADD CONSTRAINT [Address_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[Client]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Loan] ADD CONSTRAINT [Loan_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[Client]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

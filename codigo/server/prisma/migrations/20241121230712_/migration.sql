-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `senha_salt` VARCHAR(255) NULL,
    `resetToken` VARCHAR(255) NULL DEFAULT '',
    `resetTokenExpiry` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Leitor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,

    UNIQUE INDEX `Leitor_usuarioId_key`(`usuarioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Autor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mediaAvaliacoes` INTEGER NULL,
    `usuarioId` INTEGER NOT NULL,

    UNIQUE INDEX `Autor_usuarioId_key`(`usuarioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Livro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `autorId` INTEGER NOT NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `categoria` ENUM('DRAMA', 'SUSPENSE', 'ACAO', 'COMEDIA', 'ROMANCE') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MeuLivro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `leitorId` INTEGER NOT NULL,
    `livroId` INTEGER NOT NULL,
    `avaliacao` INTEGER NULL,
    `status` ENUM('FAVORITO', 'DESEJO') NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Leitor` ADD CONSTRAINT `Leitor_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Autor` ADD CONSTRAINT `Autor_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Livro` ADD CONSTRAINT `Livro_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `Autor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MeuLivro` ADD CONSTRAINT `MeuLivro_leitorId_fkey` FOREIGN KEY (`leitorId`) REFERENCES `Leitor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MeuLivro` ADD CONSTRAINT `MeuLivro_livroId_fkey` FOREIGN KEY (`livroId`) REFERENCES `Livro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE `AvaliacaoAutor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `leitorId` INTEGER NOT NULL,
    `autorId` INTEGER NOT NULL,
    `avaliacao` INTEGER NOT NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AvaliacaoAutor` ADD CONSTRAINT `AvaliacaoAutor_leitorId_fkey` FOREIGN KEY (`leitorId`) REFERENCES `Leitor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AvaliacaoAutor` ADD CONSTRAINT `AvaliacaoAutor_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `Autor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	/**
	 * Устанавливаем `output: 'export'` для создания полностью статического сайта.
	 * После сборки все страницы будут сохранены как HTML-файлы в папке /out.
	 */
	output: 'export',
};

module.exports = nextConfig;
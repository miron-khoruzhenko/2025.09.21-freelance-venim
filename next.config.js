/** @type {import('next').NextConfig} */
const nextConfig = {
	/**
	 * Устанавливаем `output: 'export'` для создания полностью статического сайта.
	 * После сборки все страницы будут сохранены как HTML-файлы в папке /out.
	 */
	eslint: {
		// ВНИМАНИЕ: Это позволит вашему билду успешно завершиться,
		// даже если в проекте есть ошибки ESLint.
		ignoreDuringBuilds: true,
	},
	output: 'export',
};

module.exports = nextConfig;
document.addEventListener('alpine:init', () => {
    Alpine.data('solarSystem', () => ({
        activePlanet: null,
        showDetails: false,
        planets: [
            {
                name: 'Mercury',
                description: 'The smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth\'s Moon.',
                color: 'from-gray-300 to-gray-500',
                stats: { diameter: '4,880 km', distance: '57.9 million km', moons: 0 },
                size: 'w-12 h-12'
            },
            {
                name: 'Venus',
                description: 'Spinning in the opposite direction to most planets, Venus is the hottest planet, and one of the brightest objects in the sky.',
                color: 'from-orange-200 to-orange-400',
                stats: { diameter: '12,104 km', distance: '108.2 million km', moons: 0 },
                size: 'w-16 h-16'
            },
            {
                name: 'Earth',
                description: 'Our home planet is the third planet from the Sun, and the only place we know of so far that\'s inhabited by living things.',
                color: 'from-blue-400 to-green-400',
                stats: { diameter: '12,742 km', distance: '149.6 million km', moons: 1 },
                size: 'w-20 h-20'
            },
            {
                name: 'Mars',
                description: 'Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence that Mars was – billions of years ago – wetter and warmer, with a thick atmosphere.',
                color: 'from-red-400 to-red-600',
                stats: { diameter: '6,779 km', distance: '227.9 million km', moons: 2 },
                size: 'w-14 h-14'
            },
            {
                name: 'Jupiter',
                description: 'Jupiter is more than twice as massive as all the other planets combined. The Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.',
                color: 'from-orange-300 to-yellow-200',
                stats: { diameter: '139,820 km', distance: '778.5 million km', moons: 79 },
                size: 'w-32 h-32'
            },
            {
                name: 'Saturn',
                description: 'Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn\'s.',
                color: 'from-yellow-200 to-yellow-500',
                stats: { diameter: '116,460 km', distance: '1.4 billion km', moons: 82 },
                size: 'w-28 h-28',
                hasRings: true
            },
            {
                name: 'Uranus',
                description: 'Uranus rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.',
                color: 'from-cyan-300 to-cyan-500',
                stats: { diameter: '50,724 km', distance: '2.9 billion km', moons: 27 },
                size: 'w-24 h-24'
            },
            {
                name: 'Neptune',
                description: 'Neptune is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations.',
                color: 'from-blue-600 to-indigo-600',
                stats: { diameter: '49,244 km', distance: '4.5 billion km', moons: 14 },
                size: 'w-24 h-24'
            }
        ],

        selectPlanet(planet) {
            this.activePlanet = planet;
            this.showDetails = true;
        },

        closeDetails() {
            this.showDetails = false;
            setTimeout(() => {
                this.activePlanet = null;
            }, 300); // Wait for transition
        }
    }));
});

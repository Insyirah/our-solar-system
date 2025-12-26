document.addEventListener('alpine:init', () => {
    Alpine.data('solarSystem', () => ({
        activePlanet: null,
        showDetails: false,
        currentView: 'solar-system',
        sunData: {
            name: 'The Sun',
            description: 'The Sun is the star at the center of our Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core.',
            color: 'from-orange-400 to-red-500',
            stats: { diameter: '1.4 million km', distance: '0 km', moons: 'N/A' },
            size: 'w-32 h-32',
            hasRings: false,
            glowClass: 'sun-glow'
        },
        get visiblePlanets() {
            if (this.currentView === 'earth') {
                return this.planets.filter(p => p.name === 'Earth');
            }
            return this.planets.concat(this.dwarfPlanets);
        },
        dwarfPlanets: [
            {
                name: 'Ceres',
                description: 'Ceres is the largest object in the asteroid belt between Mars and Jupiter and the only dwarf planet located in the inner solar system.',
                color: 'from-gray-300 to-stone-400',
                stats: { diameter: '940 km', distance: '413 million km', moons: 0 },
                size: 'w-8 h-8',
                orbitDiameter: '52vh',
                orbitSpeed: '12s'
            },
            {
                name: 'Pluto',
                description: 'Pluto consists of rock and ice and is relatively small—about one-sixth the mass of the Moon and one-third its volume.',
                color: 'from-orange-100 to-stone-600',
                stats: { diameter: '2,376 km', distance: '5.9 billion km', moons: 5 },
                size: 'w-10 h-10',
                orbitDiameter: '115vh',
                orbitSpeed: '20s'
            },
            {
                name: 'Haumea',
                description: 'Haumea is roughly the same size as Pluto. It is one of the fastest rotating large objects in our solar system, which distorts its shape into an ellipsoid.',
                color: 'from-gray-100 to-zinc-300',
                stats: { diameter: '1,632 km', distance: '6.4 billion km', moons: 2 },
                size: 'w-12 h-8', // Ellipsoid shape simulated by differing width/height
                orbitDiameter: '125vh',
                orbitSpeed: '25s'
            },
            {
                name: 'Makemake',
                description: 'Makemake is the second-brightest object in the Kuiper Belt as seen from Earth (after Pluto). It is also one of the largest objects in the outer solar system.',
                color: 'from-red-300 to-orange-800',
                stats: { diameter: '1,430 km', distance: '6.8 billion km', moons: 1 },
                size: 'w-10 h-10',
                orbitDiameter: '135vh',
                orbitSpeed: '30s'
            },
            {
                name: 'Eris',
                description: 'Eris is one of the largest known dwarf planets in our solar system. It is about the same size as Pluto but is three times farther from the Sun.',
                color: 'from-slate-100 to-slate-300',
                stats: { diameter: '2,326 km', distance: '10.1 billion km', moons: 1 },
                size: 'w-10 h-10',
                orbitDiameter: '145vh',
                orbitSpeed: '40s'
            }
        ],
        planets: [
            {
                name: 'Mercury',
                description: 'The smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth\'s Moon.',
                color: 'from-gray-300 to-gray-500',
                stats: { diameter: '4,880 km', distance: '57.9 million km', moons: 0 },
                size: 'w-12 h-12',
                orbitDiameter: '20vh',
                orbitSpeed: '8s'
            },
            {
                name: 'Venus',
                description: 'Spinning in the opposite direction to most planets, Venus is the hottest planet, and one of the brightest objects in the sky.',
                color: 'from-orange-200 to-orange-400',
                stats: { diameter: '12,104 km', distance: '108.2 million km', moons: 0 },
                size: 'w-16 h-16',
                orbitDiameter: '28vh',
                orbitSpeed: '12s'
            },
            {
                name: 'Earth',
                description: 'Our home planet is the third planet from the Sun, and the only place we know of so far that\'s inhabited by living things.',
                color: 'from-blue-400 to-green-400',
                stats: { diameter: '12,742 km', distance: '149.6 million km', moons: 1 },
                size: 'w-20 h-20',
                orbitDiameter: '36vh',
                orbitSpeed: '16s',
                satellites: [
                    {
                        name: 'Moon',
                        description: 'The Moon is Earth\'s only natural satellite. It is the fifth largest satellite in the Solar System and the largest and most massive relative to its parent planet.',
                        size: 'w-4 h-4',
                        color: 'bg-gray-200',
                        orbitDiameter: '180%',
                        orbitSpeed: '4s',
                        stats: { diameter: '3,474 km', distance: '384,400 km', moons: 0 },
                        distanceLabel: 'Dist. from Earth'
                    }
                ]

            },
            {
                name: 'Mars',
                description: 'Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence that Mars was – billions of years ago – wetter and warmer, with a thick atmosphere.',
                color: 'from-red-400 to-red-600',
                stats: { diameter: '6,779 km', distance: '227.9 million km', moons: 2 },
                size: 'w-14 h-14',
                orbitDiameter: '44vh',
                orbitSpeed: '22s',

            },
            {
                name: 'Jupiter',
                description: 'Jupiter is more than twice as massive as all the other planets combined. The Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.',
                color: 'from-orange-300 to-yellow-200 relative overflow-hidden jupiter-spot',
                stats: { diameter: '139,820 km', distance: '778.5 million km', moons: 79 },
                size: 'w-32 h-32',
                orbitDiameter: '60vh',
                orbitSpeed: '40s',

            },
            {
                name: 'Saturn',
                description: 'Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn\'s.',
                color: 'from-yellow-200 to-yellow-500',
                stats: { diameter: '116,460 km', distance: '1.4 billion km', moons: 82 },
                size: 'w-28 h-28',
                hasRings: true,
                orbitDiameter: '75vh',
                orbitSpeed: '60s',

            },
            {
                name: 'Uranus',
                description: 'Uranus rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.',
                color: 'from-cyan-300 to-cyan-500',
                stats: { diameter: '50,724 km', distance: '2.9 billion km', moons: 27 },
                size: 'w-24 h-24',
                orbitDiameter: '90vh',
                orbitSpeed: '80s'
            },
            {
                name: 'Neptune',
                description: 'Neptune is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations.',
                color: 'from-blue-600 to-indigo-600',
                stats: { diameter: '49,244 km', distance: '4.5 billion km', moons: 14 },
                size: 'w-24 h-24',
                orbitDiameter: '105vh',
                orbitSpeed: '100s'
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

// ========================================
// Canvas Background Animation
// Enhanced Neural Network with Refined Motion Dynamics
// ========================================

class NeuralNetworkCanvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.nodes = [];
        this.streams = [];
        this.symbols = [];
        this.particles = [];
        this.animationId = null;
        this.gridSpacing = 80;
        this.connectionDistance = 150;
        this.frameCount = 0;
        
        this.resize();
        this.initNodes();
        this.initStreams();
        this.initSymbols();
        this.initParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.handleResize());
    }
    
    handleResize() {
        const wasWidth = this.canvas.width;
        const wasHeight = this.canvas.height;
        
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        // Scale existing nodes proportionally
        if (wasWidth > 0 && wasHeight > 0) {
            const scaleX = this.canvas.width / wasWidth;
            const scaleY = this.canvas.height / wasHeight;
            
            this.nodes.forEach(node => {
                node.x *= scaleX;
                node.y *= scaleY;
            });
            
            this.streams.forEach(stream => {
                stream.x *= scaleX;
            });
            
            this.symbols.forEach(symbol => {
                symbol.x *= scaleX;
                symbol.y *= scaleY;
            });
            
            this.particles.forEach(particle => {
                particle.x *= scaleX;
                particle.y *= scaleY;
            });
        }
        
        // Add more nodes if needed
        if (this.nodes.length < 60) {
            const needed = 60 - this.nodes.length;
            for (let i = 0; i < needed; i++) {
                this.nodes.push(this.createNode());
            }
        }
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createNode() {
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            vx: (Math.random() - 0.5) * 0.15, // Further reduced for slower motion
            vy: (Math.random() - 0.5) * 0.15,
            baseRadius: Math.random() * 1.5 + 2.5, // 2.5-4px base radius
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.015 + 0.025, // Slower pulse speeds
            glowIntensity: Math.random() * 0.3 + 0.5
        };
    }
    
    initNodes() {
        // Exactly 60 neural network nodes with enhanced properties
        const nodeCount = 60;
        this.nodes = [];
        for (let i = 0; i < nodeCount; i++) {
            this.nodes.push(this.createNode());
        }
    }
    
    initStreams() {
        // 30 data streams with reduced speed and refined motion
        const streamCount = 30;
        this.streams = [];
        for (let i = 0; i < streamCount; i++) {
            const streamLength = Math.random() * 80 + 60; // Shorter, more elegant streams
            this.streams.push({
                x: Math.random() * this.canvas.width,
                y: -streamLength - Math.random() * 300, // Start above viewport
                speed: Math.random() * 0.8 + 0.4, // Slower: 0.4-1.2px/frame (reduced from 1-3)
                length: streamLength,
                baseOpacity: Math.random() * 0.3 + 0.2, // More subtle
                trailOpacity: Math.random() * 0.2 + 0.15,
                width: Math.random() * 1 + 1.5, // Thinner streams
                dots: []
            });
            
            // Fewer, more refined dots along stream
            const dotCount = 3 + Math.floor(Math.random() * 3);
            for (let j = 0; j < dotCount; j++) {
                this.streams[i].dots.push({
                    offset: j * (streamLength / dotCount),
                    size: Math.random() * 2 + 1.5,
                    pulse: Math.random() * Math.PI * 2
                });
            }
        }
    }
    
    initSymbols() {
        // Exactly 15 floating mathematical symbols with graceful drift
        const symbolList = ['Σ', '∞', 'π', 'λ', '∫', '∂', 'α', 'β', 'θ', 'Δ'];
        const symbolCount = 15;
        this.symbols = [];
        for (let i = 0; i < symbolCount; i++) {
            this.symbols.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                symbol: symbolList[Math.floor(Math.random() * symbolList.length)],
                size: 28 + Math.random() * 8, // 28-36px for variety
                baseOpacity: Math.random() * 0.25 + 0.15, // 0.15-0.4 (faint purple glow)
                vx: (Math.random() - 0.5) * 0.15, // Very slow horizontal drift
                vy: Math.random() * 0.3 + 0.2, // Slow, graceful vertical drift
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.015, // Slower rotation
                floatPhase: Math.random() * Math.PI * 2,
                floatAmplitude: Math.random() * 20 + 10 // Gentle floating motion
            });
        }
    }
    
    initParticles() {
        // Exactly 20 floating particles with sine-wave motion paths
        const particleCount = 20;
        this.particles = [];
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                baseX: Math.random() * this.canvas.width,
                baseY: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.3, // Horizontal velocity
                radius: Math.random() * 1.5 + 0.8, // 0.8-2.3px
                opacity: Math.random() * 0.4 + 0.25, // 0.25-0.65
                phase: Math.random() * Math.PI * 2,
                phaseSpeed: Math.random() * 0.015 + 0.01, // Varying phase speeds
                amplitude: Math.random() * 40 + 20, // Sine wave amplitude
                frequency: Math.random() * 0.02 + 0.01 // Sine wave frequency
            });
        }
    }
    
    updateNodes() {
        // Reduced movement speed for more balanced animation
        this.nodes.forEach((node, index) => {
            // Slower, more subtle variation using sine waves
            const time = this.frameCount * 0.005; // Reduced from 0.01 for slower movement
            const variationX = Math.sin(time + index * 0.5) * 0.03; // Reduced from 0.05
            const variationY = Math.cos(time + index * 0.3) * 0.03; // Reduced from 0.05
            
            node.vx += variationX;
            node.vy += variationY;
            
            // Stronger damping for slower, more controlled motion
            node.vx *= 0.985; // Increased from 0.98
            node.vy *= 0.985; // Increased from 0.98
            
            // Apply velocity with speed reduction factor
            node.x += node.vx * 0.8; // 20% speed reduction
            node.y += node.vy * 0.8; // 20% speed reduction
            
            // Slower pulse effect
            node.pulse += node.pulseSpeed * 0.7; // 30% slower pulse
            
            // Smooth boundary wrapping
            if (node.x < -10) {
                node.x = this.canvas.width + 10;
                node.vx = (Math.random() - 0.5) * 0.15; // Reduced initial velocity
            }
            if (node.x > this.canvas.width + 10) {
                node.x = -10;
                node.vx = (Math.random() - 0.5) * 0.15; // Reduced initial velocity
            }
            if (node.y < -10) {
                node.y = this.canvas.height + 10;
                node.vy = (Math.random() - 0.5) * 0.15; // Reduced initial velocity
            }
            if (node.y > this.canvas.height + 10) {
                node.y = -10;
                node.vy = (Math.random() - 0.5) * 0.15; // Reduced initial velocity
            }
        });
    }
    
    updateStreams() {
        // Reduced speed, more elegant flow
        this.streams.forEach((stream, index) => {
            stream.y += stream.speed;
            
            // Reset stream when it goes off screen
            if (stream.y > this.canvas.height + stream.length) {
                stream.y = -stream.length - Math.random() * 200;
                stream.x = Math.random() * this.canvas.width;
            }
            
            // Update dots with pulsing effect
            stream.dots.forEach(dot => {
                dot.offset = (dot.offset + stream.speed) % (stream.length + 30);
                dot.pulse += 0.1;
            });
        });
    }
    
    updateSymbols() {
        // Graceful drift with floating motion
        this.symbols.forEach(symbol => {
            // Gentle floating motion using sine wave
            symbol.floatPhase += 0.01;
            const floatOffset = Math.sin(symbol.floatPhase) * symbol.floatAmplitude * 0.01;
            
            symbol.x += symbol.vx;
            symbol.y += symbol.vy + floatOffset;
            symbol.rotation += symbol.rotationSpeed;
            
            // Smooth wrap around with larger margins
            if (symbol.x < -100) symbol.x = this.canvas.width + 100;
            if (symbol.x > this.canvas.width + 100) symbol.x = -100;
            if (symbol.y < -100) {
                symbol.y = this.canvas.height + 100;
                // Reset to top with new random properties
                symbol.vx = (Math.random() - 0.5) * 0.15;
                symbol.x = Math.random() * this.canvas.width;
            }
            if (symbol.y > this.canvas.height + 100) {
                symbol.y = -100;
                symbol.vx = (Math.random() - 0.5) * 0.15;
                symbol.x = Math.random() * this.canvas.width;
            }
        });
    }
    
    updateParticles() {
        // Enhanced sine-wave motion paths
        this.particles.forEach(particle => {
            particle.phase += particle.phaseSpeed;
            
            // Horizontal movement
            particle.baseX += particle.vx;
            
            // Sine wave vertical motion
            const sineOffset = Math.sin(particle.phase * particle.frequency) * particle.amplitude;
            particle.y = particle.baseY + sineOffset;
            particle.x = particle.baseX;
            
            // Update base Y with slight drift
            particle.baseY += Math.sin(particle.phase * 0.5) * 0.1;
            
            // Wrap around
            if (particle.x < -20) {
                particle.x = this.canvas.width + 20;
                particle.baseX = particle.x;
            }
            if (particle.x > this.canvas.width + 20) {
                particle.x = -20;
                particle.baseX = particle.x;
            }
            if (particle.y < -20) {
                particle.y = this.canvas.height + 20;
                particle.baseY = particle.y;
            }
            if (particle.y > this.canvas.height + 20) {
                particle.y = -20;
                particle.baseY = particle.y;
            }
        });
    }
    
    drawGrid() {
        // Subtle cyan grid (80px spacing, 0.08 opacity)
        this.ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
        this.ctx.lineWidth = 0.5;
        
        // Vertical lines
        for (let x = 0; x <= this.canvas.width; x += this.gridSpacing) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }
        
        // Horizontal lines
        for (let y = 0; y <= this.canvas.height; y += this.gridSpacing) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }
    }
    
    drawConnections() {
        // Enhanced clearly visible connections with slower, more balanced animation
        const time = this.frameCount * 0.002; // Slower animation (reduced from 0.005)
        
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const dx = this.nodes[i].x - this.nodes[j].x;
                const dy = this.nodes[i].y - this.nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.connectionDistance) {
                    // Calculate opacity based on distance (fade with distance)
                    const maxOpacity = 0.7; // Increased from 0.4 for better visibility
                    const distanceFactor = 1 - (distance / this.connectionDistance);
                    const baseOpacity = distanceFactor * maxOpacity;
                    
                    // Slower, more subtle pulsing based on time and node indices
                    const pulsePhase = time + (i + j) * 0.05; // Slower phase change
                    const pulse = (Math.sin(pulsePhase) + 1) * 0.5; // 0 to 1
                    // More subtle variation: 70-100% of base (instead of 30-100%)
                    const opacity = baseOpacity * (0.7 + pulse * 0.3);
                    
                    // Ensure minimum visibility for all connections
                    const minOpacity = 0.25; // Minimum opacity for visibility
                    const finalOpacity = Math.max(opacity, minOpacity * distanceFactor);
                    
                    // Create gradient from node to node
                    const gradient = this.ctx.createLinearGradient(
                        this.nodes[i].x, this.nodes[i].y,
                        this.nodes[j].x, this.nodes[j].y
                    );
                    
                    // More visible gradient transitions from cyan to purple
                    const midOpacity = finalOpacity * 0.75; // Increased from 0.6
                    gradient.addColorStop(0, `rgba(56, 189, 248, ${finalOpacity})`);
                    gradient.addColorStop(0.5, `rgba(147, 51, 234, ${midOpacity})`);
                    gradient.addColorStop(1, `rgba(56, 189, 248, ${finalOpacity * 0.9})`);
                    
                    this.ctx.strokeStyle = gradient;
                    // Thicker lines for better visibility: 1.2-2.0px (increased from 0.8-1.2px)
                    this.ctx.lineWidth = 1.2 + distanceFactor * 0.8;
                    this.ctx.lineCap = 'round'; // Rounded line caps for smoother appearance
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
                    this.ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
    
    drawNodes() {
        // Enhanced cyan glowing circles with soft glow
        this.nodes.forEach(node => {
            const pulse = Math.sin(node.pulse);
            const radius = node.baseRadius + pulse * 0.3; // Subtle pulse
            const glowRadius = radius + 3 + pulse * 1;
            
            // Multi-layer glow for softer appearance
            // Outer glow (softest)
            this.ctx.shadowBlur = 20;
            this.ctx.shadowColor = 'rgba(56, 189, 248, 0.3)';
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(56, 189, 248, 0.1)';
            this.ctx.fill();
            
            // Middle glow
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, radius + 1.5, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(56, 189, 248, 0.3)';
            this.ctx.fill();
            
            // Main circle with intense glow
            this.ctx.shadowBlur = 12;
            this.ctx.shadowColor = '#38bdf8';
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(56, 189, 248, ${0.7 + pulse * 0.3})`;
            this.ctx.fill();
            
            // Inner bright core
            this.ctx.shadowBlur = 0;
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, radius * 0.6, 0, Math.PI * 2);
            this.ctx.fillStyle = '#7dd3fc';
            this.ctx.fill();
            
            this.ctx.shadowBlur = 0;
        });
    }
    
    drawStreams() {
        // Refined vertical flowing lines with elegant gradient trails
        this.streams.forEach(stream => {
            const streamTop = stream.y;
            const streamBottom = stream.y + stream.length;
            
            // Enhanced gradient: cyan to purple transition
            const gradient = this.ctx.createLinearGradient(
                stream.x, streamTop,
                stream.x, streamBottom
            );
            
            // Smooth transition from cyan to purple
            gradient.addColorStop(0, `rgba(56, 189, 248, ${stream.baseOpacity})`);
            gradient.addColorStop(0.3, `rgba(96, 165, 250, ${stream.baseOpacity * 0.9})`);
            gradient.addColorStop(0.5, `rgba(147, 51, 234, ${stream.trailOpacity})`);
            gradient.addColorStop(0.7, `rgba(168, 85, 247, ${stream.trailOpacity * 0.8})`);
            gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
            
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = stream.width;
            this.ctx.lineCap = 'round';
            this.ctx.beginPath();
            this.ctx.moveTo(stream.x, streamTop);
            this.ctx.lineTo(stream.x, streamBottom);
            this.ctx.stroke();
            
            // Refined glowing dots along streams with pulsing
            stream.dots.forEach(dot => {
                const dotY = stream.y + dot.offset;
                if (dotY > -10 && dotY < this.canvas.height + 10) {
                    const dotPulse = (Math.sin(dot.pulse) + 1) * 0.5;
                    const dotSize = dot.size + dotPulse * 0.5;
                    const dotOpacity = 0.6 + dotPulse * 0.4;
                    
                    this.ctx.shadowBlur = 10;
                    this.ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
                    this.ctx.beginPath();
                    this.ctx.arc(stream.x, dotY, dotSize, 0, Math.PI * 2);
                    this.ctx.fillStyle = `rgba(56, 189, 248, ${dotOpacity})`;
                    this.ctx.fill();
                    this.ctx.shadowBlur = 0;
                }
            });
        });
    }
    
    drawSymbols() {
        // Mathematical symbols with faint purple glow and graceful appearance
        this.symbols.forEach(symbol => {
            this.ctx.save();
            this.ctx.translate(symbol.x, symbol.y);
            this.ctx.rotate(symbol.rotation);
            
            // Faint purple glow effect with varying intensity
            const glowIntensity = 0.6 + Math.sin(this.frameCount * 0.02 + symbol.rotation) * 0.2;
            this.ctx.shadowBlur = 18;
            this.ctx.shadowColor = `rgba(147, 51, 234, ${glowIntensity})`;
            
            // Varying opacity for depth
            const opacity = symbol.baseOpacity + Math.sin(this.frameCount * 0.01) * 0.1;
            
            this.ctx.font = `bold ${symbol.size}px 'JetBrains Mono'`;
            this.ctx.fillStyle = `rgba(147, 51, 234, ${opacity})`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(symbol.symbol, 0, 0);
            
            this.ctx.shadowBlur = 0;
            this.ctx.restore();
        });
    }
    
    drawParticles() {
        // Enhanced small cyan particles with depth
        this.particles.forEach(particle => {
            // Vary opacity slightly based on position for depth
            const depthOpacity = particle.opacity + Math.sin(particle.phase) * 0.1;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(56, 189, 248, ${depthOpacity})`;
            this.ctx.fill();
            
            // Subtle glow for some particles
            if (Math.random() > 0.7) {
                this.ctx.shadowBlur = 5;
                this.ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.shadowBlur = 0;
            }
        });
    }
    
    animate() {
        this.frameCount++;
        
        // Clear canvas for crisp animation
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update all elements
        this.updateNodes();
        this.updateStreams();
        this.updateSymbols();
        this.updateParticles();
        
        // Draw in order (back to front) for proper layering
        this.drawGrid();
        this.drawStreams();
        this.drawConnections();
        this.drawParticles();
        this.drawSymbols();
        this.drawNodes();
        
        // Continue animation
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// ========================================
// Initialize Canvas
// ========================================

let canvasInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('backgroundCanvas');
    if (canvas) {
        canvasInstance = new NeuralNetworkCanvas(canvas);
    }
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (canvasInstance) {
        canvasInstance.destroy();
    }
});
